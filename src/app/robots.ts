import { MetadataRoute } from "next";
import { SITE_METADATA } from "@/config/site-metadata";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_METADATA.siteUrl || "https://springdalesacademy.edu.in";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
