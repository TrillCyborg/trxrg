import styled from '@emotion/styled'

export const Subtitle = styled.h5`
  /* font-family: Roboto; */
  font-family: 'Fira Mono', monospace;
  font-size: 24px;
  color: ${props => props.color ? props.color : 'rgba(255,255,255,0.60)'};
  text-align: center;
`