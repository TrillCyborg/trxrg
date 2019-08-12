import React from 'react'
import { OutboundLink } from 'react-ga'

export const HeroIcon = ({ link, icon }: any) => (
  <OutboundLink to={link} target="_blank" eventLabel={link}>
    <i style={{ marginLeft: 18, marginRight: 18, color: '#fff' }} className={icon} />
  </OutboundLink>
)