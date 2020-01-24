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

export const AboutMe = () => (
  <Slide bgColor='secondary'>
    <Heading size={3} textColor='tertiary'>
      My name is Giacomo
    </Heading>
    <Layout>
      <Fill>
        <Image src='/images/me.jpg' />
      </Fill>
      <Fill>
        <br />
        <br />
        <Text textAlign='left'>I like:</Text>
        <List textColor='primary'>
          <ListItem textSize='1em'>web technologies</ListItem>
          <ListItem textSize='1em'>playing the accordion</ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
)
