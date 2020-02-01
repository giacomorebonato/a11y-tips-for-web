import React from 'react'
import { CodePane, Fill, Image, Slide, Heading, Text, Layout } from 'spectacle'

export const AltAttributeIntro = () => (
  <Slide bgColor='secondary'>
    <Heading size={4} textColor='tertiary'>
      [alt=] attribute on images
    </Heading>
    <Layout>
      <Fill style={{ paddingRight: '1em' }}>
        <Image src='/images/alt-img.png' />
      </Fill>
      <Fill>
        <Image alt='A beautiful dog' src='/images/doggo.jpg' />
      </Fill>
    </Layout>
  </Slide>
)

export const ImageContextIsKey = () => (
  <Slide bgColor='secondary'>
    <Heading size={4} textColor='tertiary'>
      Context is key
    </Heading>
    <Layout>
      <Fill style={{ paddingRight: '1em' }}>
        <Image src='/images/cocktail.jpg' />
      </Fill>
      <Fill style={{ display: 'flex', alignItems: 'center' }}>
        <Text textColor='primary'>
          If it describes something, we need to make sure that we don't put
          something generic in there. For example, "a photo of a cocktail"
          doesn't depict the colors, texture, and garnish of the cocktail below.
        </Text>
      </Fill>
    </Layout>
  </Slide>
)
