import React from "react"
import styled from '@emotion/styled'
import "./layout.css"

const LayoutWrapper = styled.div`
  background-color: ${(props: any) => props.theme.colors.dark.background};
`

export const Layout = ({ children }: any) => (
  <LayoutWrapper>
    <main>{children}</main>
  </LayoutWrapper>
)
