import React from 'react'
import {
  Heading,
  Image,
  Slide,
  Fill,
  Layout,
  Notes,
  List,
  ListItem,
  Text
} from 'spectacle'

export const AboutMe = () => (
  <Slide>
    <Heading size={3}>My name is Giacomo</Heading>
    <Layout>
      <Fill>
        <Image src={require('./me.jpg')} />
      </Fill>
      <Fill>
        <br />
        <br />
        <Text textAlign='left'>I like:</Text>
        <List>
          <ListItem textSize='1em'>web technologies</ListItem>
          <ListItem textSize='1em'>playing the accordion</ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
)
