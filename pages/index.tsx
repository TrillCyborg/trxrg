import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Hero } from '../components/hero'
import { Header } from '../components/header'
import { Layout } from '../components/layout'
import { ProjectItem } from '../components/content/project-item'
import { FadeInUp } from '../components/animations/fade-in-up'
import { PROJECT_LINKS, CONTACT, SITE_METADATA } from '../consts'


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

const swish = '/static/images/swish.png'
const cosmo = '/static/images/cosmo.png'
const cryptofighters = '/static/images/cryptofighters.png'

const projects = [
  { name: 'swish', pic: swish, link: PROJECT_LINKS.swish },
  { name: 'cosmo', pic: cosmo, link: PROJECT_LINKS.cosmo },
  {
    name: 'cryptofighters',
    pic: cryptofighters,
    link: PROJECT_LINKS.cryptofighters,
  },
]

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
      <link href="https://github.com/trillcyborg" rel="me" />
    </Head>
    <Layout>
      <Header items={headerItems} />
      <Hero />
      <FadeInUp>
        <ProjectList>
          {projects.map(({ name, pic, link }) => (
            <ProjectItem key={name} pic={pic} link={link} />
          ))}
        </ProjectList>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: 75 }}>
          <EmailLink href={`mailto://${CONTACT.email}`} rel="me">{CONTACT.email}</EmailLink>
        </div>
      </FadeInUp>
    </Layout>
  </>
)

export default IndexPage
