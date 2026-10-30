export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin"] }],
    sitemap: "https://hillviewsimdega.com/sitemap.xml",
  };
}
