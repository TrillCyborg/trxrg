import React from 'react'
import styled from 'styled-components'
import { HeaderTitle } from './header-title'
import { HeaderItem } from './header-item'
import { HeaderItemList } from './header-item-list'

const Wrapper = styled.div`
  background-color: rgba(0,0,0,0.04);
  margin-bottom: 1.45rem;

  @media (max-width: 509px) {
    display: none;
  }
`

export const Header = ({ siteTitle }) => (
  <Wrapper>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <HeaderTitle label={siteTitle} />
      <HeaderItemList>
        <HeaderItem label="HOME" active />
        <HeaderItem label="CONTACT" />
      </HeaderItemList>
    </div>
  </Wrapper>
)

export default Header