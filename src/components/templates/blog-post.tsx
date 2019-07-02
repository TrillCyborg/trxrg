import * as React from 'react'
import styled from '@emotion/styled'
import Layout from '../layout'
import SEO from '../seo'
import { Header } from '../header'
import { LINKS } from '../../consts'

const headerItems = [
  [{ label: 'BACK', to: '/blog', icon: 'fa fa-long-arrow-left' }],
  [
    { label: 'GitHub', to: LINKS.github, icon: 'fab fa-github', outbound: true, mr: ['10px', '18px'] },
    { label: 'Twitter', to: LINKS.twitter, icon: 'fab fa-twitter', outbound: true, ml: ['10px', '18px'] }
  ]
]

// <HeroIcon icon="fab fa-github" link={LINKS.github} />
// <HeroIcon icon="fab fa-linkedin-in" link={LINKS.linkedin} />
// <HeroIcon icon="fab fa-medium-m" link={LINKS.medium} />
// <HeroIcon icon="fab fa-twitter" link={LINKS.twitter} />

const keywords = [
  `jason werner`,
  `trillcyborg`,
  `trxrg`,
]

const OuterWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
  margin-bottom: 100px;
`

const InnerWrapper = styled.div`
  font-family: 'Anonymous Pro';
  color: #fff;
  width: 70%;
  max-width: 800px;
  margin: auto;
  color: ${props => props.theme.colors.dark.text};
  
  h1 {
    font-family: 'Maven Pro';
    text-align: center;
    margin-bottom: 70px;
  }

  h2 {
    font-family: 'Maven Pro';
  }

  pre {
    code {
      font-family: 'Fira Mono';
      text-align: center;
    }
  }

  a {
    font-family: 'Anonymous Pro';
    color: ${props => props.theme.colors.dark.accent};
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

export const BlogPost = (props: BlogPostProps) => (
  <Layout>
    <SEO
      title={props.pageContext.frontmatter.title}
      keywords={(props.pageContext.frontmatter.tags || []).concat(keywords)}
    />
    <Header itemsArray={headerItems} reverse style={{ position: 'absolute', top: 0 }} />
    <OuterWrapper>
      <InnerWrapper>
        {props.children}
      </InnerWrapper>
    </OuterWrapper>
  </Layout>
)

export default BlogPost
