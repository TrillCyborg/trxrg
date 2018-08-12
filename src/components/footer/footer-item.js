import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FooterItem as Font } from '../typography/footer-item'


const Link = styled(OutboundLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`

const TextWrapper = styled.div`
  @media (max-width: 509px) {
    display: none;
  }
`

const Icon = styled.i`
  color: #fff;

  @media (max-width: 509px) {
    font-size: 26px;
  }
`

export const FooterItem = ({ link, icon, label }) => (
  <Link href={link} target="_blank">
    <Icon className={icon}></Icon>
    <TextWrapper>
      <Font style={{ marginBottom: 0, marginLeft: 15 }}>{label}</Font>
    </TextWrapper>
  </Link>
)