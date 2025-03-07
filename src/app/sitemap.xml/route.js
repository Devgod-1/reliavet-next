export async function GET() {
    const siteUrl = "https://reliavet.com";
    const wpApiUrl = `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=50&page=1&orderby=date&order=asc`; // Adjust per_page if needed

    // Fetch posts from WordPress API
    const response = await fetch(wpApiUrl);
    const posts = await response.json();

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${siteUrl}</loc>
            <priority>1.0</priority>
        </url>
        <url><loc>https://reliavet.com/hospital</loc><lastmod>2025-03-06T19:53:14.206Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/pet-owner</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/technician</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/about-us</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/veterinarian</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/terms-of-use</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/find-hospital</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/find-hospital/search-hospitals</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/blog</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/find-vet</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/find-vet/search-technicians</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/find-vet/search-veterinarians</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/privacy-policy</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        <url><loc>https://reliavet.com/contact-us</loc><lastmod>2025-03-06T19:53:14.207Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
        ${posts
        .map(
            (post) => `
        <url>
            <loc>${siteUrl}/blog/${post.slug}</loc>
            <lastmod>${new Date(post.modified).toISOString()}</lastmod>
            <priority>0.8</priority>
        </url>`
        )
        .join("")}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}