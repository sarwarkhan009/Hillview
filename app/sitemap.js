import { NAV } from "../lib/nav";

export default function sitemap() {
  const base = "https://hillviewsimdega.com";
  const urls = new Set(["/"]);
  NAV.forEach((item) => {
    if (item.href) urls.add(item.href);
    (item.children || []).forEach((c) => urls.add(c.href));
  });
  return [...urls].map((u) => ({
    url: base + u,
    lastModified: new Date(),
    changeFrequency: u === "/" ? "weekly" : "monthly",
    priority: u === "/" ? 1 : 0.7,
  }));
}
