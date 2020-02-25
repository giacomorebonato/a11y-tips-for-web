import React from 'react'
import { CodePane, Fill, Fit, Heading, Layout, Slide, Text } from 'spectacle'
import styled from 'styled-components'

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

const inputLabelHTML = `<label for="surname">
  Surname
</label>
<input
  id="surname"
  placeholder="Write your surname"
/>
`

const badInputLabelHTML = `<div>
  <label>
    Surname
  </label>
</div>
<div>
  <input name="surname" />
</div>
`

const InputWrapper = styled.div`
  background: #fff;
  padding: 0.5em;
  border-radius: 5px;
  text-align: left;
`

export const InputLabelsBadExample = () => (
  <Slide bgColor='secondary'>
    <Heading size={3} textColor='tertiary'>
      Bad example
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          style={{ fontSize: '1em', paddingRight: '1em' }}
          lang='html'
          source={badInputLabelHTML}
        />
      </Fill>
      <Fit
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <InputWrapper>
          <label htmlFor='surname'>Surname</label>
          <input />
        </InputWrapper>
      </Fit>
    </Layout>
  </Slide>
)

export const InputLabelsExample = () => (
  <Slide bgColor='secondary'>
    <Heading size={3} textColor='tertiary'>
      Example
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          style={{ fontSize: '1em', paddingRight: '1em' }}
          lang='html'
          source={inputLabelHTML}
        />
      </Fill>
      <Fit
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <InputWrapper>
          <label htmlFor='surname'>Surname</label>
          <input placeholder='Write your surname' />
        </InputWrapper>
      </Fit>
    </Layout>
  </Slide>
)
