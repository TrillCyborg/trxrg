import styled from '@emotion/styled'
import {
  paddingTop,
  PaddingTopProps,
  paddingBottom,
  PaddingBottomProps,
} from 'styled-system'

export const Title = styled.h1<PaddingTopProps & PaddingBottomProps>`
  /* font-family: 'Fira Mono', monospace; */
  font-family: 'Maven Pro', sans-serif;
  font-weight: 100;
  font-size: 100px;
  color: #ffffff;
  text-align: center;
  ${paddingTop}
  ${paddingBottom}
`
