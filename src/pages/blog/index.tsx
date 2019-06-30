import * as React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

interface BlogPageQueryResult {
  allMdx: {
    edges: Array<{
      node: {
        id: string
        frontmatter: {
          title: string
          description: string
          date: string
          image: string
          slug: string
          tags: string[]
        }
        fileAbsolutePath: string
        timeToRead: number
        wordCount: {
          paragraphs: number
          sentences: number
          words: number
        }
      }
    }>
  }
}

const BlogPage = (props: { data: BlogPageQueryResult, location: { pathname: string } }) => {
  const posts = props.data.allMdx.edges.map(({ node }) => node)
  return (
    <Layout>
      <SEO title="Blog" />
      <div id="derp">
        {posts.map(post => {
          const path = `${props.location.pathname}/${post.frontmatter.slug}`
          return (
            <Link key={post.id} to={path} style={{ color: '#fff' }}>
              <div>{post.frontmatter.title}</div>
              <div>{post.frontmatter.description}</div>
              <div>{post.frontmatter.date}</div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPageQuery {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
            image
            slug
            tags
          }
          fileAbsolutePath
          timeToRead
          wordCount {
            paragraphs
            sentences
            words
          }
        }
      }
    }
  }
`