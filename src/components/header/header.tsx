import * as React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import { HeaderItem, HeaderItemProps } from './header-item'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  margin-bottom: 1.45rem;
  margin-top: 1.45rem;
`

const Inner = styled.div<{ reverse?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${props => props.reverse ? '' : 'justify-content: flex-end;' }
`

export const HeaderItemList = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

interface HeaderProps {
  items?: HeaderItemProps[]
  itemsArray?: Array<HeaderItemProps[]>
  reverse?: boolean
  style?: any
}

export const Header = (props: HeaderProps) => (
  <Wrapper style={props.style}>
    <Inner reverse={props.reverse}>
      {!!props.itemsArray ? (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'row', justifyContent: 'space-between' }}>
          {props.itemsArray.map(itemList => (
            <HeaderItemList mx={[32, 52]}>
              {itemList!.map(item => <HeaderItem {...item} />)}
            </HeaderItemList>
          ))}  
        </div>
      ) : (
        <HeaderItemList mx={[32, 52]}>
          {props.items!.map(item => <HeaderItem {...item} />)}
        </HeaderItemList>
      )}
    </Inner>
  </Wrapper>
)
