import * as React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'theme-ui'
import { toTheme } from '@theme-ui/typography'
// import lincoln from 'typography-theme-lincoln'
import anonymous from 'typography-theme-anonymous'

import Layout from '../layout'
import SEO from '../seo'

const keywords = [
  `jason werner`,
  `trillcyborg`,
  `trxrg`,
]

const OuterWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 100px;
`

const InnerWrapper = styled.div`
  font-family: 'Anonymous Pro';
  color: #fff;
  width: 70%;
  max-width: 800px;
  margin: auto;
  h1 {
    text-align: center;
    margin-bottom: 70px;
  }

  pre {
    code {
      text-align: center;
    }
  }
`

interface BlogPostProps {
  children: any
  pageContext: {
    frontmatter: {
      date: string
      description: string
      image: string
      slug: string
      tags: string[]
      title: string
    }
  }
}

export const BlogPost = (props: BlogPostProps) => {
  console.log('props', props)
  return (
    <Layout>
      <SEO title="TRXRG" keywords={keywords.concat(props.pageContext.frontmatter.tags)} />
      <ThemeProvider theme={toTheme(anonymous)}>
        <OuterWrapper>
          <InnerWrapper>
            {props.children}
          </InnerWrapper>
        </OuterWrapper>
      </ThemeProvider>
    </Layout>
  )
}

export default BlogPost
