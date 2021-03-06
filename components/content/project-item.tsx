import React from 'react'
import styled from '@emotion/styled'
import { OutboundLink } from 'react-ga'

const Wrapper = styled(OutboundLink)`
  position: relative;
  margin: 45px 24px;
  max-width: 1012px;
  border-radius: 8px;
  box-shadow: 0 8px 15px 4px rgba(0,0,0,0.50);
  text-decoration: none;
  /* transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  } */

  @media (max-width: 509px) {
    margin: 30px 24px;
  }
`

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0,0,0,0.3)
  }
`

export const ProjectItem = ({ link, pic }: any) => (
  <Wrapper to={link} target="_blank" eventLabel={link}>
    {/* <Backdrop /> */}
    <img src={pic} style={{ width: '100%', borderRadius: 8, marginBottom: -6 }} />
  </Wrapper>
)