import preval from "babel-plugin-preval/macro";

export type BlogPost = {
  title: string
  summary: string
  image?: string
  publishedAt: string
  published: boolean
  micro: boolean
  path: string
  tags?: string[]
  exportHtml?: boolean
};

const posts: Array<BlogPost> = preval`
  module.exports = require('./get-blog-posts.js');
`;

export default posts