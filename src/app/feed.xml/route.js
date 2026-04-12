import { Feed } from "feed";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";

export const dynamic = "force-static";

export async function GET() {
  const siteUrl = DATA.url;

  const author = {
    name: DATA.name,
    email: DATA.contact.email,
    link: siteUrl,
  };

  const feed = new Feed({
    title: DATA.name,
    description: DATA.description,
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/me.png`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()} ${DATA.name}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  });

  const posts = await getBlogPosts();

  for (const post of posts) {
    const url = `${siteUrl}/blog/${post.slug}`;
    feed.addItem({
      title: post.metadata.title,
      id: url,
      link: url,
      description: post.metadata.summary,
      content: post.source,
      author: [author],
      date: new Date(post.metadata.publishedAt),
    });
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "content-type": "application/xml",
      "cache-control": "s-maxage=31556952",
    },
  });
}
