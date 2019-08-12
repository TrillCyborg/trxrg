const fs = require("fs");
const path = require("path");
const posts = require("./get-blog-posts");
const { CONTACT } = require("../consts")

const OUT_DIR = path.join(process.cwd(), "out");
const { name, username, website, photo } = CONTACT

const feed = {
  version: "https://jsonfeed.org/version/1",
  title: `${name}'s Blog`,
  description: "My thoughts about tech, life and what I'm doing.",
  home_page_url: `${website}/blog`,
  feed_url: `${website}/feed.json`,
  icon: website+photo,
  favicon: website+photo,
  author: {
    name: `${name} (${username})`,
    url: website,
    avatar: website+photo,
  },
  items: posts.map(post => {
    const item = {
      id: `${website}${post.path}`,
      url: `${website}${post.path}`,
      title: post.micro ? undefined : post.title,
      summary: post.micro ? undefined : post.summary,
      image: post.image,
      date_published: post.publishedAt,
      tags: post.tags,
    }

    if (post.micro) {
      item.content_text = post.summary
    } else if (post.html) {
      item.content_html = post.html
    } else {
      item.content_text = `${post.summary} See ${website}${post.path}!`
    }

    return item
  })
};

module.exports = (dir /*: string */ = OUT_DIR) => {
  fs.writeFileSync(path.join(dir, "feed.json"), JSON.stringify(feed, null, 2));
};