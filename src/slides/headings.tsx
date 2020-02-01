import React from 'react'
import {
  CodePane,
  Heading,
  Slide,
  Fill,
  Fit,
  Text,
  List,
  ListItem
} from 'spectacle'

import { MySlide } from '../components/my-slide'

const headingsHTML = `<h1>I am the title of a book</h1>
<h2>I am the title of a chapter</h2>
<h3>I am a sub section of a chapter</h3>`

export const AboutHeadings = () => (
  <MySlide title='Headings in the correct order'>
    <Fill>
      <div>
        <CodePane
          lang='html'
          source={headingsHTML}
          style={{ fontSize: '0.8em' }}
        />
      </div>
    </Fill>
    <Fill style={{ marginLeft: '0.4em' }}>
      <List style={{ marginTop: 0 }}>
        <ListItem style={{ fontSize: '0.8em' }}>
          Use only one h1 per page
        </ListItem>
        <ListItem style={{ fontSize: '0.8em' }}>
          Use heading levels for the depth of content.
        </ListItem>
        <ListItem style={{ fontSize: '0.8em' }}>
          Use heading levels for the depth of content.
        </ListItem>
        <ListItem style={{ fontSize: '0.8em' }}>Don't skip headings.</ListItem>
      </List>

      <Text textColor='primary' style={{ fontSize: '0.8em' }}>
        Like if you were writing a book.
      </Text>
    </Fill>
  </MySlide>
)
