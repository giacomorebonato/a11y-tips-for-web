import React from 'react'
import { CodePane, Heading, Slide, Text } from 'spectacle'

export const InputLabels = () => (
  <Slide bgColor='secondary'>
    <Heading size={3} textColor='tertiary'>
      Labels for their input
    </Heading>
    <Text textColor='primary'>Why every label needs a input?</Text>
    <CodePane
      lang='html'
      source={`
        <label>Email</label>
        <input id='email' value='my-email@email.com' />
        <label>Surname</label>
        <input id='surname' value='Rebonato' />
      `}
      style={{
        marginTop: '0.5em',
        fontSize: '1em'
      }}
    />
  </Slide>
)
