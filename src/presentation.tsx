import React from 'react'

import { Deck } from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'
import { AboutMe } from './slides/about-me'
import { Contrast, ContrastQuote } from './slides/contrast'
import { Intro } from './slides/intro'
import { InputLabels } from './slides/input-labels'
import { OutlineIntro } from './slides/outline'

require('normalize.css')

const theme = createTheme(
  {
    primary: '#fff',
    secondary: '#4d4a4a',
    tertiary: '#03A9FC',
    quaternary: '#fc9220'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Intro />
        <AboutMe />
        <Contrast />
        <ContrastQuote />
        <InputLabels />
        <OutlineIntro />
      </Deck>
    )
  }
}
