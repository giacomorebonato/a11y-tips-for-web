import React from 'react'
import {
  BlockQuote,
  Cite,
  Image,
  Quote,
  Text,
  List,
  ListItem,
  Fill,
  Fit
} from 'spectacle'

import { MySlide } from '../components/my-slide'

export const Contrast = () => (
  <MySlide title='About contrast' withLayout={false}>
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
  </MySlide>
)

export const ContrastAirbnbBefore = () => (
  <MySlide title='What do you think about this?'>
    <Image src='/images/contrast-1.png' />
  </MySlide>
)

export const ContrastAirbnbAfter = () => (
  <MySlide title='Yes... you guessed right'>
    <Image src='/images/contrast-2.png' />
  </MySlide>
)

export const ContrastTools = () => (
  <MySlide title='Tools'>
    <List>
      <ListItem>
        <a href='https://webaim.org/resources/contrastchecker/' target='_blank'>
          WebAIM contrast checker
        </a>
      </ListItem>
      <ListItem>Chrome inspector</ListItem>
    </List>
  </MySlide>
)

export const ContrastQuote = () => (
  <MySlide title='Quote'>
    <BlockQuote>
      <Quote>
        If you fix your Contrast, you are already way more accessible than the
        top million sites.
      </Quote>
      <Cite>Lindsey</Cite>
    </BlockQuote>
  </MySlide>
)
