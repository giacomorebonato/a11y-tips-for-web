import React from 'react'
import { BlockQuote, Cite, Heading, Quote, Slide, Text } from 'spectacle'

export const Contrast = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary'>About contrast</Heading>
    <Text textColor='primary'></Text>
  </Slide>
)

export const ContrastQuote = () => (
  <Slide transition={['fade']} bgColor='secondary'>
    <BlockQuote>
      <Quote>
        If you fix your Contrast, you are already way more accessible than the
        top million sites.
      </Quote>
      <Cite>Lindsey</Cite>
    </BlockQuote>
  </Slide>
)
