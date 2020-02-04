import React from 'react'
import {
  Heading,
  Image,
  Slide,
  Fill,
  Layout,
  List,
  ListItem,
  Text
} from 'spectacle'

import { MySlide } from '../components/my-slide'

export const AboutMe = () => (
  <MySlide title='I am Giacomo'>
    <Fill>
      <Image src='/images/me.jpg' padding='2em' />
    </Fill>
    <Fill>
      <br />
      <br />
      <Text textColor='primary' textAlign='left'>
        I like:
      </Text>
      <List textColor='primary'>
        <ListItem textSize='1em'>web technologies</ListItem>
        <ListItem textSize='1em'>playing the accordion</ListItem>
      </List>
    </Fill>
  </MySlide>
)
