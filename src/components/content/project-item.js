import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
  margin: 45px 24px;
  max-width: 1012px;
  border-radius: 8px;
  box-shadow: 0 8px 15px 4px rgba(0,0,0,0.50);
  text-decoration: none;

  @media (max-width: 509px) {
    margin: 30px 24px;
  }
`

export const ProjectItem = ({ link, pic }) => (
  <Wrapper href={link} target="_blank">
    <img src={pic} style={{ width: '100%', borderRadius: 8, marginBottom: -6 }} />
  </Wrapper>
)