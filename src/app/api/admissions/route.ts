import { NextRequest, NextResponse } from "next/server";
import { admissionEnquirySchema } from "@/lib/validations/admission";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { sanitizeString } from "@/lib/security/sanitization";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    // 1. Content-Type check
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, error: "Invalid Content-Type. Expected application/json." },
        { status: 415 }
      );
    }

    // 2. Request body size check (Max 15 KB)
    const contentLength = parseInt(req.headers.get("content-length") || "0", 10);
    if (contentLength > 15 * 1024) {
      return NextResponse.json(
        { success: false, error: "Payload too large." },
        { status: 413 }
      );
    }

    // 3. Rate limiting check (5 requests per 10 minutes per IP)
    const rateLimit = checkRateLimit(req, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a few minutes before submitting again.",
        },
        { status: 429 }
      );
    }

    // 4. Safe JSON parsing
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format." },
        { status: 400 }
      );
    }

    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json(
        { success: false, error: "Malformed request payload." },
        { status: 400 }
      );
    }

    const body = rawBody as Record<string, unknown>;

    // 5. Bot honeypot & timing detection
    if (body.honeypot_field && typeof body.honeypot_field === "string" && body.honeypot_field.length > 0) {
      // Silently accept bot submission without persisting
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 6. Server-side Zod validation
    const validationResult = admissionEnquirySchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please verify your input.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 7. Input sanitization and normalization
    const sanitizedRecord = {
      parent_name: sanitizeString(data.parent_name),
      child_name: sanitizeString(data.child_name),
      child_age_or_class: sanitizeString(data.child_age_or_class),
      phone: sanitizeString(data.phone),
      email: data.email ? sanitizeString(data.email).toLowerCase() : null,
      preferred_contact_method: data.preferred_contact_method || "phone",
      message: data.message ? sanitizeString(data.message) : null,
      status: "new",
    };

    // 8. Supabase insertion
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const isMockMode = !supabaseUrl || supabaseUrl.includes("placeholder-project");

    if (!isMockMode) {
      const { error: dbError } = await supabaseAdmin
        .from("admission_enquiries")
        .insert([sanitizedRecord]);

      if (dbError) {
        console.error("Database insert error on admission_enquiries:", dbError.message);
        return NextResponse.json(
          {
            success: false,
            error: "Unable to process enquiry at this time. Please contact the school directly.",
          },
          { status: 500 }
        );
      }
    } else {
      // In development / demo mode without live Supabase credentials
      console.log("[DEV MODE] Valid admission enquiry processed:", {
        parent: sanitizedRecord.parent_name,
        child: sanitizedRecord.child_name,
        class: sanitizedRecord.child_age_or_class,
        phone: sanitizedRecord.phone,
      });
    }

    // 9. Safe response (never return internal IDs or full DB records)
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error in /api/admissions:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}

// Reject other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST." },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST." },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
