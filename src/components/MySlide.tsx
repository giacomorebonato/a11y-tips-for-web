import React from 'react'

import { Heading, Slide, Layout } from 'spectacle'

interface MySlideProps {
  title: string
}

export const MySlide: React.FC<MySlideProps> = ({ children, title }) => (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading size={4} textColor='tertiary' style={{ marginBottom: '0.5em' }}>
      {title}
    </Heading>
    <Layout>{children}</Layout>
  </Slide>
)
