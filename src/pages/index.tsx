import React from 'react'
import styled from '@emotion/styled'
import { Hero } from '../components/hero'
import { Header } from '../components/header'
import { ProjectItem } from '../components/content/project-item'
import { FadeInUp } from '../components/animations/fade-in-up'
import { PROJECT_LINKS, CONTACT } from '../consts'

import Layout from '../components/layout'
import SEO from '../components/seo'

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

const headerItems = [
  { name: 'BLOG', path: '/blog' },
]

const swish = require('../assets/images/swish.png')
const cosmo = require('../assets/images/cosmo.png')
const cryptofighters = require('../assets/images/cryptofighters.png')
const cotrader = require('../assets/images/cotrader.png')

const projects = [
  { name: 'swish', pic: swish, link: PROJECT_LINKS.swish },
  { name: 'cosmo', pic: cosmo, link: PROJECT_LINKS.cosmo },
  {
    name: 'cryptofighters',
    pic: cryptofighters,
    link: PROJECT_LINKS.cryptofighters,
  },
  // { name: 'cotrader', pic: cotrader, link: PROJECT_LINKS.cotrader },
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
  <Layout>
    <SEO title="TRXRG" keywords={keywords} />
    <Header items={headerItems} />
    <Hero />
    <FadeInUp>
      <ProjectList>
        {projects.map(({ pic, link }) => (
          <ProjectItem pic={pic} link={link} />
        ))}
      </ProjectList>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: 75 }}>
        <EmailLink href={`mailto://${CONTACT.email}`}>{CONTACT.email}</EmailLink>
      </div>
    </FadeInUp>
  </Layout>
)

export default IndexPage
