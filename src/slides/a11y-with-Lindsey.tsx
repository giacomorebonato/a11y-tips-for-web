import React from 'react'
import { Heading, Notes, Slide, Text } from 'spectacle'

export const AboutLindsey = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary' size={3}>
      A11y with Lindsey
    </Heading>
    <Text textColor='primary'>
      I found a lot of inspiration and many of the examples of this talk are
      taken from her blog:
      <br />
      <br />
      <a href='https://www.a11ywithlindsey.com/' target='_blank'>
        www.a11ywithlindsey.com
      </a>
    </Text>
    <Notes>
      <p>
        I reached out to Lindsey on Patreon and she's been supportive in sharing
        knowledge about accessibility also by copying her examples.
      </p>
    </Notes>
  </Slide>
)
