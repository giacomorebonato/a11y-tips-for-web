import React from 'react'

import { Deck } from 'spectacle'

import { theme } from './theme'

import { AboutMe } from './slides/about-me'
import { EmptyLinks, UseButtonInstead } from './slides/empty-links'
import { AltAttributeIntro } from './slides/alt-attribute'
import { AboutLindsey } from './slides/a11y-with-Lindsey'
import { AboutHeadings } from './slides/headings'
import { Contrast, ContrastQuote } from './slides/contrast'
import { Intro } from './slides/intro'
import { InputLabels } from './slides/input-labels'
import { OutlineIntro } from './slides/outline'
import { Questions } from './slides/end-questions'

export default () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Intro />
    <AboutMe />
    <AboutLindsey />
    <Contrast />
    <EmptyLinks />
    <UseButtonInstead />
    <AltAttributeIntro />
    <AboutHeadings />
    <ContrastQuote />
    <InputLabels />
    <OutlineIntro />
    <Questions />
  </Deck>
)
