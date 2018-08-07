import React from 'react'
import styled from 'styled-components'
import { HeaderTitle } from './header-title'
import { HeaderItem } from './header-item'
import { HeaderItemList } from './header-item-list'

const headerItems = [
  { name: 'HOME', path: '/' },
  // { name: 'CONTACT', path: '/contact' },
]

const Wrapper = styled.div`
  background-color: rgba(0,0,0,0.04);
  margin-bottom: 1.45rem;

  @media (max-width: 509px) {
    display: none;
  }
`

export const Header = ({ siteTitle, path }) => (
  <Wrapper>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <HeaderTitle label={siteTitle} />
      <HeaderItemList>
        {headerItems.map(item => (
          <HeaderItem label={item.name} active={path === item.path} to={item.path} />
        ))}
      </HeaderItemList>
    </div>
  </Wrapper>
)

export default Header