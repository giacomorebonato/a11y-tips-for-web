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
import styled from 'styled-components'

import { MySlide } from '../components/my-slide'

const headingsHTML = `<h1>I am the title of a book</h1>
<h2>I am the title of a chapter</h2>
<h3>I am a sub section of a chapter</h3>`

export const AboutHeadings = () => (
  <MySlide title='Headings in the correct order'>
    <Fill style={{ alignItems: 'center', display: 'flex' }}>
      <div>
        <CodePane
          lang='html'
          source={headingsHTML}
          style={{ fontSize: '0.7em' }}
        />
      </div>
    </Fill>
    <Fill style={{ marginLeft: '0.4em' }}>
      <div>
        <h1>I am the title of a book</h1>
        <h2>I am the title of a chapter</h2>
        <h3>I am a sub section of a chapter</h3>
      </div>
    </Fill>
  </MySlide>
)

const MyListItem = styled(ListItem)`
  font-size: 1em !important;
  line-height: 1.8em;
`

export const HeadingsLikeABook = () => (
  <MySlide title='Like writing a book'>
    <List style={{ marginTop: 0 }}>
      <MyListItem>Use only one h1 per page</MyListItem>
      <MyListItem>Use heading levels for the depth of content.</MyListItem>
      <MyListItem>Use heading levels for the depth of content.</MyListItem>
      <MyListItem>Don't skip headings.</MyListItem>
    </List>
  </MySlide>
)
