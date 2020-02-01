import React from 'react'
import { CodePane, Heading, Fill, Slide, Text, Layout } from 'spectacle'

import { MySlide } from '../components/my-slide'

export const EmptyLinks = () => (
  <MySlide title='Empty links'>
    <Fill>
      <CodePane
        style={{ fontSize: '1em', paddingRight: '1em' }}
        lang='html'
        source='<a href="">Click me</a>'
      />
    </Fill>
    <Fill>
      <Text textColor='primary' textAlign='left'>
        This element is not a link...
        <br />
        Otherwise it would have a URL specified in the href attribute.
      </Text>
    </Fill>
  </MySlide>
)

const myButton = `
  <button class="my-button">
    Click me
  </button>
`
const myButtonCSS = `.my-button {
  display: inline-block;
  border: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  background: transparent;
}`

export const UseButtonInstead = () => (
  <MySlide title='Perhaps you needed a button'>
    <Fill style={{ paddingRight: '1em' }}>
      <CodePane lang='html' source={myButton} style={{ fontSize: '0.8em' }} />
      <CodePane
        lang='css'
        source={myButtonCSS}
        style={{
          fontSize: '0.8em',
          marginTop: '1em'
        }}
      />
    </Fill>
    <Fill>
      <Text textColor='primary' textAlign='left'>
        If a button wasn't used because of its default style, it can easily be
        changed with some CSS.
      </Text>
    </Fill>
  </MySlide>
)

const HTMLTags = `<header />
<footer />
<section />
<fieldset />
<content />
<section />`

export const UseTheRightMarkup = () => (
  <MySlide title='Use the right tool for the job'>
    <Fill style={{ paddingRight: '1em' }}>
      <CodePane lang='html' source={HTMLTags} style={{ fontSize: '0.8em' }} />
    </Fill>
    <Fill>
      <Text textColor='primary' textAlign='left'>
        HTML Markup is rich. Try to use the right element for the context (not
        just ${`<div />`} everywhere).
      </Text>
    </Fill>
  </MySlide>
)
