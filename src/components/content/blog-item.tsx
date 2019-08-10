import * as React from 'react'
import moment from 'moment'
import styled from '@emotion/styled'
import {
  maxWidth,
  MaxWidthProps,
  paddingRight,
  PaddingRightProps,
} from 'styled-system'
import { Flex, Box, Card } from 'rebass'
import Link from 'gatsby-link'

export interface BlogPost {
  id: string
  frontmatter: {
    title: string
    description: string
    date: string
    image: string
    slug: string
    tags: string[]
  }
  fileAbsolutePath: string
  timeToRead: number
  wordCount: {
    paragraphs: number
    sentences: number
    words: number
  }
}

const SubText = styled.div`
  font-family: 'Fira Mono';
  opacity: 0.6;
  font-size: 14px;
`

const Tags = styled(SubText)<MaxWidthProps & PaddingRightProps>`
  ${maxWidth}
  ${paddingRight}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

interface BlogItemProps extends BlogPost {
  location: {
    pathname: string
  }
}

export const BlogItem = (props: BlogItemProps) => {
  const path = `${props.location.pathname}/${props.frontmatter.slug}`
  return (
    <Box key={props.id} width={[1, 3 / 4, 3 / 4, 1 / 2]}>
      <Link to={path} style={{ color: '#fff', textDecoration: 'none' }}>
        <Card
          p={3}
          m={3}
          borderRadius={8}
          boxShadow="0 0 16px rgba(0, 0, 0, .25)"
        >
          <Box px={2}>
            <h3 style={{ fontFamily: 'Maven Pro' }}>
              {props.frontmatter.title}
            </h3>
            <p style={{ fontFamily: 'Anonymous Pro' }}>
              {props.frontmatter.description}
            </p>
            <Flex
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Tags maxWidth={['50%', '60%']} pr={'7px'}>
                {props.frontmatter.tags.map(tag => `#${tag} `)}
              </Tags>
              <SubText>
                {moment(props.frontmatter.date, 'YYYY/MM/DD').format('MM/DD/YYYY')}
              </SubText>
            </Flex>
          </Box>
        </Card>
      </Link>
    </Box>
  )
}
