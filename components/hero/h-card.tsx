import React from 'react'
import styled from '@emotion/styled'

const HCardUrl = styled.a`
  text-decoration: none;
  color: #fff;
  :hover {
    text-decoration: none;
    color: #fff;
  }
`

export const HCard = (props: { children: JSX.Element | JSX.Element[] }) => (
  <div className="h-card">
    {props.children}
  </div>
)

HCard.Url = (props: { url: string, children: JSX.Element | JSX.Element[] }) => (
  <HCardUrl href={props.url} className="u-url u-uid" rel="me">
    {props.children}
  </HCardUrl>
)

HCard.Name = (props: { children: JSX.Element | JSX.Element[] }) => (
  <span className="p-name">
    {props.children}
  </span>
)

HCard.Photo = (props: { src: string, hide?: boolean }) => (
  <img className="u-photo" src={props.src} style={props.hide ? { display: 'none' } : undefined} />
)

HCard.JobTitle = (props: { children: JSX.Element | JSX.Element[] }) => (
  <span className="p-job-title">
    {props.children}
  </span>
)
