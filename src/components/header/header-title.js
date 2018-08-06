import React from 'react'
import Link from 'gatsby-link'
import { HeaderTitle as Font } from '../typography/header-title'

export const HeaderTitle = ({ label }) => (
  <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: 22, marginLeft: 82 }}>
    <Font>{label}</Font>
  </Link>
)