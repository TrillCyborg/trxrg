import React from 'react'
import styled from 'styled-components'
import { FooterItem as Font } from '../typography/footer-item'

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

export const FooterItem = ({ icon, label }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <Icon className={icon}></Icon>
    <TextWrapper>
      <Font style={{ marginBottom: 0, marginLeft: 15 }}>{label}</Font>
    </TextWrapper>
  </div>
)