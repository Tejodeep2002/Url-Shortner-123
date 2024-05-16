import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://urlshortner123.ttezo.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
   
  ];
}
