import React from 'react'

export const HeroIcon = ({ link, icon }) => (
  <a href={link} target="_blank">
    <i style={{ marginLeft: 18, marginRight: 18, color: '#fff' }} className={icon} />
  </a>
)