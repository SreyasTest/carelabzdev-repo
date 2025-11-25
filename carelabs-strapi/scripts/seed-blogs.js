const fs = require('fs');

const API_URL = "https://competent-belief-4c86b8d649.strapiapp.com/api/blogs";

const TOKEN = "529e1023e0b18ad1ae6b16590ab34eaa1c7f981e6eec7c3c94850a52f7d34569cc80fb74214d7c05b1d31840e965cf2434f5c88489e301a0c01e048e578ba4dc9e04af6e5b2c910bd46612af0e40f444d832bd64f1d79b0f218d816603bd980d2154fa1caef09387357bd9e6385caa8fc3d38e9046a1af84b5c445848a29c74c";

async function seedBlogs() {
  const blogs = JSON.parse(fs.readFileSync('./scripts/blogs.json', 'utf8'));

  for (const blog of blogs) {
    const body = {
      data: {
        title: blog.title,
        slug: blog.slug,
        link: blog.link,
        pubDate: blog.pubDate,
        description: blog.description,
        content: blog.content,

        featureImage: blog.featureImage,    

        seo: {
          canonicalURL: blog.seo?.canonicalURL,
          keywords: blog.seo?.keywords,
          metaDescription: blog.seo?.metaDescription,
          metaTitle: blog.seo?.metaTitle,
          metaRobots: blog.seo?.metaRobots,
          metaViewport: blog.seo?.metaViewport,

          metaImage: {
            url: blog.seo?.metaImage?.url || null
          },

          structuredData: blog.seo?.structuredData || null,

          openGraph: {
            ogUrl: blog.seo?.openGraph?.ogUrl,
            ogType: blog.seo?.openGraph?.ogType,
            ogTitle: blog.seo?.openGraph?.ogTitle,
            ogDescription: blog.seo?.openGraph?.ogDescription,
            ogImage: {
              url: blog.seo?.openGraph?.ogImage?.url || null
            }
          }
        },
      }
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify(body)
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("❌ Failed Blog:", blog.title);
        console.error(JSON.stringify(result, null, 2));
      } else {
        console.log("✅ Created:", blog.title);
      }

    } catch (err) {
      console.error("❌ Network/Fetch Error for:", blog.title, err.message);
    }
  }
}

seedBlogs();

