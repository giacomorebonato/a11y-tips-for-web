import React from 'react'
import { Fill, Image, Text } from 'spectacle'

import { MySlide } from '../components/my-slide'

export const AltAttributeIntro = () => (
  <MySlide title='[alt=] attribute on images'>
    <Fill style={{ paddingRight: '1em' }}>
      <Image src='/images/alt-img.png' />
    </Fill>
    <Fill>
      <Image alt='A beautiful dog' src='/images/doggo.jpg' />
    </Fill>
  </MySlide>
)

export const ImageContextIsKey = () => (
  <MySlide title='Context is key'>
    <Fill style={{ paddingRight: '1em' }}>
      <Image src='/images/cocktail.jpg' />
    </Fill>
    <Fill style={{ display: 'flex', alignItems: 'center' }}>
      <Text textColor='primary'>
        If it describes something, we need to make sure that we don't put
        something generic in there. For example, "a photo of a cocktail" doesn't
        depict the colors, texture, and garnish of the cocktail below.
      </Text>
    </Fill>
  </MySlide>
)
