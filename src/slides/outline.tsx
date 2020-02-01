import React from 'react'
import { Heading, Slide, Text } from 'spectacle'

export const OutlineIntro = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary' size={4}>
      What is the outline?
    </Heading>
    <Text textColor='primary'>
      Outline is important for accessibility and we should be careful in
      changing it.
    </Text>
  </Slide>
)
