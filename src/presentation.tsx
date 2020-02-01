import React from 'react'

import { Deck } from 'spectacle'

import { theme } from './theme'

import { AboutMe } from './slides/about-me'
import {
  EmptyLinks,
  UseButtonInstead,
  UseTheRightMarkup
} from './slides/empty-links'
import { AltAttributeIntro, ImageContextIsKey } from './slides/alt-attribute'
import { AboutLindsey, LindseyPatreon } from './slides/a11y-with-Lindsey'
import { AboutHeadings } from './slides/headings'
import {
  Contrast,
  ContrastAirbnbBefore,
  ContrastAirbnbAfter,
  ContrastTools,
  ContrastQuote
} from './slides/contrast'
import { Intro } from './slides/intro'
import {
  Disabilities,
  OtherCases,
  AssistiveTechnologies
} from './slides/assistive-technologies'
import { InputLabels, InputLabelsExample } from './slides/input-labels'
import { OutlineIntro } from './slides/outline'
import { Questions } from './slides/end-questions'

export default () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Intro />
    <AboutMe />
    <AboutLindsey />
    <LindseyPatreon />
    <Disabilities />
    <OtherCases />
    <AssistiveTechnologies />
    <Contrast />
    <ContrastAirbnbBefore />
    <ContrastAirbnbAfter />
    <ContrastTools />
    <ContrastQuote />
    <EmptyLinks />
    <UseButtonInstead />
    <UseTheRightMarkup />
    <AltAttributeIntro />
    <ImageContextIsKey />
    <AboutHeadings />
    <InputLabels />
    <InputLabelsExample />
    <OutlineIntro />
    <Questions />
  </Deck>
)
