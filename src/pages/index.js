import React from 'react'
import { Hero } from '../components/hero'
import { ProjectItem } from '../components/content/project-item'
import { Footer } from '../components/footer/footer'

import cosmo from '../images/cosmo.png'
import cryptofighters from '../images/cryptofighters.png'
import cotrader from '../images/cotrader.png'

const IndexPage = () => (
  <div>
    <Hero />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 45 }}>
      <ProjectItem pic={cosmo} />
      <ProjectItem pic={cryptofighters} />
      <ProjectItem pic={cotrader} />
    </div>
    <Footer />
  </div>
)

export default IndexPage
