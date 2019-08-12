import React from 'react'
import { Contact } from '../types';

type Children = JSX.Element | JSX.Element[]

const Card = (props: { children: Children }) => (
  <div className="h-card" style={{ display: 'none' }}>
    {props.children}
  </div>
)

const Url = (props: { children: string }) => (
  <a href={props.children} className="u-url u-uid" rel="me" />
)

const Name = (props: { children: string }) => (
  <span className="p-name">{props.children}</span>
)

const Photo = (props: { children: string }) => (
  <img className="u-photo" src={props.children} />
)

const JobTitle = (props: { children: string }) => (
  <span className="p-job-title">{props.children}</span>
)

export const HCard = (props: Contact) => (
  <Card>
    <Photo>{props.photo}</Photo>
    <Name>{props.name}</Name>
    <JobTitle>{props.jobTitle}</JobTitle>
    <Url>{props.website}</Url>
    <Url>{props.github}</Url>
    <Url>{props.linkedin}</Url>
    <Url>{props.medium}</Url>
    <Url>{props.twitter}</Url>
  </Card>
)
