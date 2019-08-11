import React from 'react'
import styled from '@emotion/styled'
import { fontSize, FontSizeProps, marginLeft, MarginLeftProps, marginRight, MarginRightProps } from 'styled-system'
import Link from 'next/link'
import { OutboundLink } from 'react-ga'
import { HeaderItem as Font } from '../typography/header-item'

const ICON_SIZE = 24

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
`

const ActiveLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #6202ee;
  position: relative;
  top: 25px;
`

const HeaderLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  margin-top: ${props => (props.active ? 2 : 0)}px;
  height: ${ICON_SIZE}px;
  box-sizing: content-box;
`

const Icon = styled.i<FontSizeProps & MarginLeftProps & MarginRightProps>`
  ${fontSize}
  ${marginLeft}
  ${marginRight}
  color: #fff;
`

export interface HeaderItemProps {
  icon?: string
  label: string
  active?: boolean
  to: string
  outbound?: boolean
  style?: any
}

type Props = HeaderItemProps & MarginLeftProps & MarginRightProps

export const HeaderItem = ({ icon, label, active, outbound, to, ml, mr}: Props) => (
  <Wrapper>
    {outbound ? (
      <OutboundLink to={to} target="_blank" eventLabel={to}>
        <Icon ml={ml} mr={mr} fontSize={[18, 24]} className={icon} />
      </OutboundLink>
    ) : (
      <HeaderLink href={to}>
        {icon ? (
          <Icon ml={ml} mr={mr} fontSize={[18, 24]} className={icon} />
        ) : (
          <Font>{label}</Font>
        )}
      </HeaderLink>
    )}
    {active ? <ActiveLine /> : null}
  </Wrapper>
)
