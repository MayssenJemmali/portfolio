const paths = [
  "/",
  "/projects/smartpfe",
  "/projects/deepskyn",
  "/projects/annoncetn",
  "/projects/gazellepro",
] as const;

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const urls = paths.map((path) => `  <url>\n    <loc>${new URL(path, origin)}</loc>\n  </url>`);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
