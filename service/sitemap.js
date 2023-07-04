const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const fs = require('fs');
const path = require('path');

// Define your website's base URL
const baseURL = 'https://codeversenepal.com';

// Define your website's routes
const routes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/blogs',
  "/services/full-stack-development",
  "/services/front-end-development",
  "/services/back-end-development",
  "/services/api-development",
  "/services/deployment-hosting"
  // Add more routes as needed
];

// Create a function to generate the sitemap
async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: baseURL });
  const writableStream = fs.createWriteStream(path.join('sitemap.xml'));

  sitemapStream.pipe(writableStream);

  // Add each route to the sitemap
  routes.forEach((route) => {
    sitemapStream.write({ url: route, changefreq: 'weekly', priority: 0.5 });
  });

  // End the stream
  sitemapStream.end();

  console.log('Sitemap generated successfully.');
}

// Generate the sitemap
generateSitemap();
