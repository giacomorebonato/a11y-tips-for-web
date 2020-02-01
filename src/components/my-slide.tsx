import React from 'react'

import { Heading, Slide, Layout } from 'spectacle'

interface MySlideProps {
  withLayout?: boolean
  title: string
}

export const MySlide: React.FC<MySlideProps> = ({
  children,
  title,
  withLayout = true
}) => (
  <Slide bgColor='secondary' textColor='primary'>
    <Heading size={4} textColor='tertiary' style={{ marginBottom: '0.5em' }}>
      {title}
    </Heading>
    {withLayout ? <Layout>{children}</Layout> : children}
  </Slide>
)
