require('dotenv').config()
const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX(withCSS({
  env: {
    GOOGLE_ANALYTICS_KEY: process.env.GOOGLE_ANALYTICS_KEY,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx', 'md']
}))