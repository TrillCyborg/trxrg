import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 45px 24px;
  max-width: 689px;
  border-radius: 8px;
  box-shadow: 0 8px 15px 4px rgba(0,0,0,0.50);

  @media (max-width: 509px) {
    margin: 30px 24px;
  }
`

export const ProjectItem = ({ pic }) => (
  <Wrapper>
    <img src={pic} style={{ width: '100%', borderRadius: 8, marginBottom: -6 }} />
  </Wrapper>
)