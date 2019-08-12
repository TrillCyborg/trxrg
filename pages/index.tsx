import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Hero } from '../components/hero'
import { Header } from '../components/header'
import { Layout } from '../components/layout'
import { ProjectItem } from '../components/content/project-item'
import { FadeInUp } from '../components/animations/fade-in-up'
import { WebRing } from '../components/web-ring'
import { HCard } from '../components/h-card'
import { PROJECTS, CONTACT, SITE_METADATA } from '../consts'

const keywords = [
  `jason werner`,
  `trillcyborg`,
  `trxrg`,
  `react`,
  `react-native`,
  `javascript`,
  `full-stack`,
  `developer`,
]

const headerItems = [{ label: 'BLOG', to: '/blog' }]

const ProjectList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
`

const EmailLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: 'Fira Mono', monospace;
  width: 100%;
`

const IndexPage = () => (
  <>
    <Head>
      <title>{`TRXRG | ${SITE_METADATA.title}`}</title>
      <meta name="keywords" content={keywords.join(`, `)} />
      <link href={CONTACT.github} rel="me" />
      <link href={CONTACT.twitter} rel="me" />
      <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
    </Head>
    <HCard {...CONTACT} />
    <Layout>
      <Header items={headerItems} />
      <Hero />
      <FadeInUp>
        <ProjectList>
          {PROJECTS.map(({ name, pic, link }) => (
            <ProjectItem key={name} pic={pic} link={link} />
          ))}
        </ProjectList>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: 50 }}>
          <EmailLink href={`mailto://${CONTACT.email}`} rel="me">{CONTACT.email}</EmailLink>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 75 }}>
          <WebRing />
        </div>
      </FadeInUp>
    </Layout>
  </>
)

export default IndexPage
