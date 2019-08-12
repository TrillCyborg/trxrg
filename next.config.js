require('dotenv').config()
const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

const generateJsonFeed = require("./data/generate-json-feed");

module.exports = withMDX(withCSS({
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (dev) return defaultPathMap;
    generateJsonFeed(outDir);
    return defaultPathMap;
  },
  env: {
    GOOGLE_ANALYTICS_KEY: process.env.GOOGLE_ANALYTICS_KEY,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx', 'md']
}))