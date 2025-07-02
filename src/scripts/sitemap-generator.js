import fs from 'fs';
import path from 'path';

// Base URL (update as needed)
const BASE_URL = 'https://www.spacesculpt.ae';

const blogListData = [
    "The Importance of Lighting in Dubai’s Interior Fit-Outs: Creating the Right Ambiance",
    "Top Materials for Interior Fit-Outs in Dubai: From Marble to Sustainable Alternatives",
    "Interior Fit-Out for Dubai’s Retail Sector: How to Design Engaging Shopping Experiences",
    "Commercial Space Interior Fit-Out: A Complete Guide to Office Transformation",
    "How Lighting Plays a Vital Role in Interior Fit-Out",
]
const services = [
    "Residential Interior Design in Dubai - Luxury Home Interiors by Space Sculpt",
    "Commercial Interior Design in Dubai - Stylish Office Spaces by Space Sculpt",
    "Retail Interior Design in Dubai - Engaging Shopping Experiences by Space Sculpt",
    "Office Interior Design in Dubai - Functional and Stylish Workspace by Space Sculpt",
    "Villa Interior Design in Dubai - Luxurious Living Spaces by Space Sculpt",
]

const formatToHyphenated = (input) => {
    return input
        .trim() // Remove leading/trailing spaces
        .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Ensure no consecutive hyphens
        .toLowerCase(); // turn into lower case
}

// Define static routes with details
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/about', priority: 0.9, changefreq: 'weekly' },
  { path: '/contact', priority: 0.9, changefreq: 'weekly' },
  { path: '/gallery', priority: 0.9, changefreq: 'weekly' },
  { path: '/blogs', priority: 0.9, changefreq: 'weekly' },
  { path: '/services', priority: 0.9, changefreq: 'weekly' },
];

// Generate dynamic blog routes with details
const blogRoutes = blogListData.map(blog => ({
  path: `/blogs/${formatToHyphenated(blog)}`,
  priority: 0.8,
  changefreq: 'monthly',
  lastmod: blog.updatedDate || blog.date || undefined,
}));

// Generate dynamic service routes with details
const serviceRoutes = services.map(service => ({
  path: `/services/${formatToHyphenated(service)}`,
  priority: 0.8,
  changefreq: 'monthly',
  // If you have lastmod for services, add here. Otherwise, omit.
}));

// Combine all routes
const allRoutes = [...staticRoutes, ...blogRoutes, ...serviceRoutes];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allRoutes.map(route => {
    let urlBlock = `  <url>\n    <loc>${BASE_URL}${route.path}</loc>`;
    if (route.lastmod) urlBlock += `\n    <lastmod>${route.lastmod}</lastmod>`;
    if (route.changefreq) urlBlock += `\n    <changefreq>${route.changefreq}</changefreq>`;
    if (route.priority) urlBlock += `\n    <priority>${route.priority}</priority>`;
    urlBlock += `\n  </url>`;
    return urlBlock;
  }).join('\n') +
  '\n</urlset>';

// Write sitemap.xml to public directory
const outputPath = path.join(__dirname, '../../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf8');

console.log('Detailed sitemap generated at', outputPath);
