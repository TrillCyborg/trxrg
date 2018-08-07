import React from 'react'
import { Hero } from '../components/hero'
import { ProjectItem } from '../components/content/project-item'
import { Footer } from '../components/footer/footer'
import { PROJECT_LINKS } from '../consts'

import cosmo from '../images/cosmo.png'
import cryptofighters from '../images/cryptofighters.png'
import cotrader from '../images/cotrader.png'

const projects = [
  { name: 'cosmo', pic: cosmo, link: PROJECT_LINKS.cosmo },
  { name: 'cryptofighters', pic: cryptofighters, link: PROJECT_LINKS.cryptofighters },
  { name: 'cotrader', pic: cotrader, link: PROJECT_LINKS.cotrader },
]

const IndexPage = () => (
  <div>
    <Hero />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 45 }}>
      {projects.map(({ pic, link }) => (
        <ProjectItem pic={pic} link={link} />
      ))}
    </div>
    <Footer />
  </div>
)

export default IndexPage
