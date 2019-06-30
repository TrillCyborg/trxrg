import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { HeaderItem as Font } from '../typography/header-item'

const Wrapper = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  user-select: none;
`

const ActiveLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #6202ee;
  position: relative;
  top: 25px;
`

export const HeaderItem = ({ label, active, to }: any) => (
  <Wrapper>
    <Link
      style={{ textDecoration: 'none', marginTop: active ? 2 : 0 }}
      activeStyle={{ textDecoration: 'none' }}
      to={to}
    >
      <Font>{label}</Font>
    </Link>
    {active ? <ActiveLine /> : null}
  </Wrapper>
)
