import React from 'react'
import { OutboundLink } from 'react-ga'

export const HeroIcon = ({ link, icon }: any) => (
  <OutboundLink to={link} target="_blank" eventLabel={link} rel="me">
    <i style={{ marginLeft: 18, marginRight: 18, color: '#fff' }} className={icon} />
  </OutboundLink>
)