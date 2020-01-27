import React from 'react'

import { CodePane, Heading, Fill, Slide, Text, Layout } from 'spectacle'

export const EmptyLinks = () => (
  <Slide bgColor='secondary'>
    <Heading size={3} textColor='tertiary'>
      Empty links
    </Heading>
    <Layout style={{ marginTop: '1em' }}>
      <Fill>
        <CodePane
          style={{ fontSize: '1em', paddingRight: '1em' }}
          lang='html'
          source='<a href="">Click me</a>'
        />
      </Fill>
      <Fill>
        <Text textColor='primary' textAlign='left'>
          This element is not a link... Otherwise it would have a URL specified
          in the href attribute.
        </Text>
      </Fill>
    </Layout>
  </Slide>
)

const myButton = `
.my-button {
  display: inline-block;
  border: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  background: transparent;
}
`

export const UseButtonInstead = () => (
  <Slide bgColor='secondary'>
    <Heading size={3} textColor='tertiary'>
      Perhaps you needed a button
    </Heading>
    <Layout>
      <Fill style={{ paddingRight: '1em' }}>
        <CodePane
          lang='html'
          source='<button class="my-button">Click me</button>'
          style={{ fontSize: '0.8em' }}
        />
        <CodePane
          lang='css'
          source={myButton}
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
    </Layout>
  </Slide>
)
