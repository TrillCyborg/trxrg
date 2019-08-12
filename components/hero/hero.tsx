import React from 'react'
import styled from '@emotion/styled'
import { CONTACT } from '../../consts'
import { Title } from '../typography/title'
import { Subtitle } from '../typography/subtitle'
import { HeroIcon } from './hero-icon'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  height: calc(100vh - 130px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 509px) {
    height: calc(55vh + 72px);
    /* height: 55vh; */
    margin-bottom: 100px;
    justify-content: flex-end;
  }
`

const Links = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  bottom: -49px;
`

export const Hero = () => (
  <Wrapper>
    <div style={{ position: 'absolute' }}>
      <Title>{CONTACT.name}</Title>
      <Subtitle>{CONTACT.jobTitle}</Subtitle>
      <Links>
        <HeroIcon icon="fab fa-github" link={CONTACT.github} />
        <HeroIcon icon="fab fa-linkedin-in" link={CONTACT.linkedin} />
        <HeroIcon icon="fab fa-medium-m" link={CONTACT.medium} />
        <HeroIcon icon="fab fa-twitter" link={CONTACT.twitter} />
      </Links>
    </div>
  </Wrapper>
)
