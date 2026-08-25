import { NextRequest } from "next/server";

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const ipStore = new Map<string, RateLimitRecord>();

// Clean up stale entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    ipStore.forEach((record, ip) => {
      if (now > record.resetAt) {
        ipStore.delete(ip);
      }
    });
  }, 5 * 60 * 1000);
}

export interface RateLimitOptions {
  limit?: number; // max requests per window
  windowMs?: number; // window size in milliseconds
}

export function checkRateLimit(
  req: NextRequest,
  options: RateLimitOptions = {}
): { allowed: boolean; remaining: number; resetAt: number } {
  const limit = options.limit ?? 5; // 5 submissions per window
  const windowMs = options.windowMs ?? 10 * 60 * 1000; // 10 minutes default
  const now = Date.now();

  // Extract client IP address
  const forwardedFor = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  const cfConnectingIp = req.headers.get("cf-connecting-ip");

  const clientIp =
    (forwardedFor ? forwardedFor.split(",")[0].trim() : null) ||
    realIp ||
    cfConnectingIp ||
    "127.0.0.1";

  const record = ipStore.get(clientIp);

  if (!record || now > record.resetAt) {
    ipStore.set(clientIp, {
      count: 1,
      resetAt: now + windowMs,
    });
    return {
      allowed: true,
      remaining: limit - 1,
      resetAt: now + windowMs,
    };
  }

  if (record.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: record.resetAt,
    };
  }

  record.count += 1;
  return {
    allowed: true,
    remaining: limit - record.count,
    resetAt: record.resetAt,
  };
}
