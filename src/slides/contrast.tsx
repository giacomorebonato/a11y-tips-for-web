import React from 'react'
import {
  BlockQuote,
  Cite,
  Heading,
  Image,
  Quote,
  Slide,
  Text,
  List,
  ListItem
} from 'spectacle'

export const Contrast = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary' size={4}>
      About contrast
    </Heading>
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

export const ContrastAirbnbBefore = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary' size={4}>
      What do you think?
    </Heading>
    <Image src='/images/contrast-1.png' />
  </Slide>
)

export const ContrastAirbnbAfter = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary' size={4}>
      Yes... you guessed right
    </Heading>
    <Image src='/images/contrast-2.png' />
  </Slide>
)

export const ContrastTools = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary' size={4}>
      Tools
    </Heading>
    <List>
      <ListItem>
        <a href='https://webaim.org/resources/contrastchecker/' target='_blank'>
          WebAIM contrast checker
        </a>
      </ListItem>
      <ListItem>Chrome inspector</ListItem>
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
