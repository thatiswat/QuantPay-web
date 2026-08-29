import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://quantpay.in",
      lastModified: new Date(),
    },
    {
      url: "https://quantpay.in/product",
      lastModified: new Date(),
    },
    {
      url: "https://quantpay.in/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://quantpay.in/contact",
      lastModified: new Date(),
    },
  ];
}