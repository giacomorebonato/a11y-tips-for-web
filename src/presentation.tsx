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
import { AboutHeadings, HeadingsLikeABook } from './slides/headings'
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
  AssistiveTechnologies,
  XBoxAdaptive,
  OtherAssistiveTechnologies
} from './slides/assistive-technologies'
import {
  InputLabels,
  InputLabelsExample,
  InputLabelsBadExample
} from './slides/input-labels'
import { LangAttribute } from './slides/lang-attribute'
import { PresentationLinks, Questions } from './slides/end-questions'

export default () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Intro />
    <AboutMe />
    <AboutLindsey />
    <LindseyPatreon />
    <Disabilities />
    <OtherCases />
    <AssistiveTechnologies />
    <XBoxAdaptive />
    <OtherAssistiveTechnologies />
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
    <HeadingsLikeABook />
    <InputLabels />
    <InputLabelsBadExample />
    <InputLabelsExample />
    <LangAttribute />
    <PresentationLinks />
    <Questions />
  </Deck>
)
