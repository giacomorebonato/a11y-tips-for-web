import React from 'react'
import { Text } from 'spectacle'

import { MySlide } from '../components/my-slide'

export const AboutLindsey = () => (
  <MySlide title='A11y with Lindsey'>
    <Text textColor='primary'>
      I found a lot of inspiration by reading blogs and articles, mainly Lindsey
      Kopacz one. Many of the examples of this presentation are taken and{' '}
      <strong>copied</strong> from her blog:
      <br />
      <br />
      <a href='https://www.a11ywithlindsey.com/' target='_blank'>
        www.a11ywithlindsey.com
      </a>
    </Text>
  </MySlide>
)

export const LindseyPatreon = () => (
  <MySlide title='She is on Patreon'>
    <Text textColor='primary'>
      I reached out to Lindsey on{' '}
      <a href='https://www.patreon.com/a11ywithlindsey/posts' target='_blank'>
        Patreon
      </a>{' '}
      and she has been supportive toward this presentation for the purpose of
      knowledge sharing.
    </Text>
  </MySlide>
)
