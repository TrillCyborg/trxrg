import * as React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Layout } from '../layout'
import { Header } from '../header'
import { LINKS, SITE_METADATA } from '../../consts'

const headerItems = [
  [{ label: 'BACK', to: '/blog', icon: 'fa fa-long-arrow-left' }],
  [
    { label: 'GitHub', to: LINKS.github, icon: 'fab fa-github', outbound: true, mr: ['10px', '18px'] },
    { label: 'Twitter', to: LINKS.twitter, icon: 'fab fa-twitter', outbound: true, ml: ['10px', '18px'] }
  ]
]

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
  color: ${(props: any) => props.theme.colors.dark.text};
  
  h1 {
    font-family: 'Maven Pro';
    text-align: center;
    margin-bottom: 70px;
  }

  h2 {
    font-family: 'Maven Pro';
  }

  code {
    color: #fff;
    background: hsla(0, 0%, 0%, 0.04);
    padding: 7px;
  }

  pre {
    code {
      font-family: 'Fira Mono';
      text-align: center;
      color: #fff;
      padding: 0;
    }
  }

  a {
    font-family: 'Anonymous Pro';
    color: ${props => props.theme.colors.dark.accent};
  }
`

interface BlogPostProps {
  children: any
  meta: {
    date: string
    description: string
    image: string
    slug: string
    tags: string[]
    title: string
  }
}

export const BlogPost = (props: BlogPostProps) => {
  const { meta, children } = props
  return (
    <>
      <Head>
        <title>{`${meta.title} | ${SITE_METADATA.title}`}</title>
        <meta name="keywords" content={keywords.concat(meta.tags).join(`, `)} />
      </Head>
      <Layout>
        <Header itemsArray={headerItems} reverse style={{ position: 'absolute', top: 0 }} />
        <OuterWrapper>
          <InnerWrapper>
            {children.slice(1, children.length - 1)}
          </InnerWrapper>
        </OuterWrapper>
      </Layout>
    </>
  )
}

export default BlogPost
