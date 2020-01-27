import React from 'react'
import { CodePane, Fill, Image, Slide, Heading, Text, Layout } from 'spectacle'

export const AltAttributeIntro = () => (
  <Slide bgColor='secondary'>
    <Heading size={3} textColor='tertiary'>
      alt attribute on images
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
