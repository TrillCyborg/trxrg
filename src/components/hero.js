import React from 'react'
import styled from 'styled-components'
import { Title } from './typography/title'
import { Subtitle } from './typography/subtitle'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  height: calc(80vh - 107px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Hero = () => (
  <Wrapper>
    <Title>Jason Werner</Title>
    <Subtitle>Full-Stack Developer</Subtitle>
    <div>
      <i style={{ marginLeft: 18, marginRight: 18, color: '#fff' }} className="fab fa-github"></i>
      <i style={{ marginLeft: 18, marginRight: 18, color: '#fff' }} className="fab fa-linkedin-in"></i>
      <i style={{ marginLeft: 18, marginRight: 18, color: '#fff' }} className="fab fa-medium-m"></i>
      <i style={{ marginLeft: 18, marginRight: 18, color: '#fff' }} className="fab fa-twitter"></i>
    </div>
  </Wrapper>
)
