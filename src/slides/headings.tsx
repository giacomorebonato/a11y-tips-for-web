import React from 'react'
import {
  CodePane,
  Heading,
  Image,
  Slide,
  Fill,
  Layout,
  List,
  ListItem,
  Text
} from 'spectacle'

export const AboutHeadings = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary' size={3}>
      Use headings in the correct way
    </Heading>
    <div>
      <CodePane
        lang='html'
        source={`
        <h1>I am the title of a book</h1>
        <h2>I am the title of a chapter</h2>
        <h3>I am a sub section of a chapter</h3>
      `}
        style={{ fontSize: '1em' }}
      />
    </div>
  </Slide>
)
