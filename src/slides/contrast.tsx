import React from 'react'
import {
  BlockQuote,
  Cite,
  Heading,
  Quote,
  Slide,
  Text,
  List,
  ListItem
} from 'spectacle'

export const Contrast = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary'>About contrast</Heading>
    <Text textColor='primary' textAlign='left'>
      Poor color contrast means that some people may have a hard time
      distinguishing between your text and the background color. These people
      could include:
    </Text>
    <List textColor='primary'>
      <ListItem>experiencing glare in the sunlight</ListItem>
      <ListItem>colorblind</ListItem>
      <ListItem>older set of eyes</ListItem>
      <ListItem>Adhd</ListItem>
    </List>
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
