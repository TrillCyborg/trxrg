import React from "react"
import styled from 'styled-components'
import { Hero } from '../components/hero'
import { ProjectItem } from '../components/content/project-item'
import { PROJECT_LINKS, CONTACT } from '../consts'

import Layout from "../components/layout"
import SEO from "../components/seo"

import cosmo from '../images/cosmo.png'
import cryptofighters from '../images/cryptofighters.png'
import cotrader from '../images/cotrader.png'

const projects = [
  { name: 'cosmo', pic: cosmo, link: PROJECT_LINKS.cosmo },
  { name: 'cryptofighters', pic: cryptofighters, link: PROJECT_LINKS.cryptofighters },
  // { name: 'cotrader', pic: cotrader, link: PROJECT_LINKS.cotrader },
]

const ProjectList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: 'Fira Mono', monospace;
  width: 100%;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <ProjectList>
      {projects.map(({ pic, link }) => (
        <ProjectItem pic={pic} link={link} />
      ))}
    </ProjectList>
    <div style={{ width: '100%', textAlign: 'center', marginBottom: 75 }}>
      <EmailLink href={`mailto://${CONTACT.email}`}>{CONTACT.email}</EmailLink>
    </div>
  </Layout>
)

export default IndexPage
