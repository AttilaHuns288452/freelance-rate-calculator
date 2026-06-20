// Generate sitemap.xml at build time
// Run with: node scripts/generate-sitemap.js

const fs = require("fs");
const path = require("path");

// Change this to your custom domain when you buy one!
// Current: your custom domain
const BASE_URL = "https://freelancecalculator.xyz";
const PAGES = [
  { url: "", changefreq: "weekly", priority: 1.0 },
  { url: "/privacy/", changefreq: "yearly", priority: 0.3 },
  { url: "/terms/", changefreq: "yearly", priority: 0.3 },
  { url: "/affiliate-disclosure/", changefreq: "yearly", priority: 0.3 },
  { url: "/blog/", changefreq: "weekly", priority: 0.8 },
  { url: "/blog/freelance-hourly-rate-calculator-guide/", changefreq: "monthly", priority: 0.7 },
  { url: "/blog/how-much-to-charge-freelancer-day-rate-vs-hourly/", changefreq: "monthly", priority: 0.7 },
  { url: "/blog/freelance-tax-deductions-calculator-write-offs/", changefreq: "monthly", priority: 0.7 },
];

function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];
  
  const urls = PAGES.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  // Write to public (for dev) and out (for static export)
  const publicPath = path.join(__dirname, "..", "public", "sitemap.xml");
  const outPath = path.join(__dirname, "..", "out", "sitemap.xml");
  
  fs.writeFileSync(publicPath, sitemap);
  fs.writeFileSync(outPath, sitemap);

  // Also update robots.txt with correct sitemap URL
  const robotsTxt = `# Robots.txt for Freelance Rate Calculator
User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Crawl-delay (be nice to servers)
Crawl-delay: 10
`;
  const robotsPublicPath = path.join(__dirname, "..", "public", "robots.txt");
  const robotsOutPath = path.join(__dirname, "..", "out", "robots.txt");
  fs.writeFileSync(robotsPublicPath, robotsTxt);
  fs.writeFileSync(robotsOutPath, robotsTxt);
  // Copy ads.txt to out folder
  const adsTxt = fs.readFileSync(path.join(__dirname, "..", "public", "ads.txt"), "utf-8");
  fs.writeFileSync(path.join(__dirname, "..", "out", "ads.txt"), adsTxt);
  console.log(`✅ Sitemap, robots.txt, and ads.txt generated`);
}

generateSitemap();