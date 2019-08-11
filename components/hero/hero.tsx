import React from 'react'
import styled from '@emotion/styled'
import { LINKS, CONTACT } from '../../consts'
import { Title } from '../typography/title'
import { Subtitle } from '../typography/subtitle'
import { HeroIcon } from './hero-icon'
import { HCard } from './h-card'

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

const HCardLinks = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  bottom: -49px;
`

export const Hero = () => (
  <Wrapper>
    <div style={{ position: 'absolute' }}>
      <HCard>
        <HCard.Url url={CONTACT.website}>
          <HCard.Name>
            <Title>{CONTACT.name}</Title>
          </HCard.Name>
          <HCard.Photo src={CONTACT.photo} hide />
        </HCard.Url>
        <HCard.JobTitle>
          <Subtitle>{CONTACT.jobTitle}</Subtitle>
        </HCard.JobTitle>
        <HCardLinks>
          <HeroIcon icon="fab fa-github" link={LINKS.github} />
          <HeroIcon icon="fab fa-linkedin-in" link={LINKS.linkedin} />
          <HeroIcon icon="fab fa-medium-m" link={LINKS.medium} />
          <HeroIcon icon="fab fa-twitter" link={LINKS.twitter} />
        </HCardLinks>
      </HCard>
    </div>
  </Wrapper>
)
