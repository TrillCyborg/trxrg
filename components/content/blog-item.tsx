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
import Link from 'next/link'
import { BlogPost } from '../../data/blog-posts'

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

const CardWrapper = styled.div`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`

export const BlogItem = (props: BlogPost) => {
  return (
    <Box width={[1, 3 / 4, 3 / 4, 1 / 2]}>
      <Link href={props.path}>
        <CardWrapper>
          <Card
            p={3}
            m={3}
            borderRadius={8}
            sx={{
              boxShadow: "0 0 16px rgba(0, 0, 0, .25)"
            }}
          >
            <Box px={2}>
              <h3 style={{ fontFamily: 'Maven Pro' }}>
                {props.title}
              </h3>
              <p style={{ fontFamily: 'Anonymous Pro' }}>
                {props.summary}
              </p>
              <Flex
                alignItems="center"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Tags maxWidth={['50%', '60%']} pr={'7px'}>
                  {props.tags.map(tag => `#${tag} `)}
                </Tags>
                <SubText>
                  {moment(props.publishedAt, 'YYYY/MM/DD').format('MM/DD/YYYY')}
                </SubText>
              </Flex>
            </Box>
          </Card>
        </CardWrapper>
      </Link>
    </Box>
  )
}
