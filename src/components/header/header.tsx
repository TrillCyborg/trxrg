import * as React from 'react'
import styled from '@emotion/styled'
import { HeaderItem } from './header-item'

interface HeaderItem {
  name: string
  path: string
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  background-color: rgba(0,0,0,0.04);
  margin-bottom: 1.45rem;
  margin-top: 1.45rem;

  @media (max-width: 509px) {
    display: none;
  }
`

export const HeaderItemList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 22px;
  margin-right: 22px;
`

export const Header = (props: { items: HeaderItem[] }) => (
  <Wrapper>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <HeaderItemList>
        {props.items.map(item => (
          <HeaderItem label={item.name} to={item.path} />
        ))}
      </HeaderItemList>
    </div>
  </Wrapper>
)