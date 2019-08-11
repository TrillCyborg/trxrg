import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { HeaderTitle as Font } from '../typography/header-title'

const TitleWrapper = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 22px;
  margin-left: 82px;
`

export const HeaderTitle = ({ label }: any) => (
  <TitleWrapper href="/">
    <Font>{label}</Font>
  </TitleWrapper>
)