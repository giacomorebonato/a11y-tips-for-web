import React from 'react'
import { Heading, Link, List, ListItem, Slide } from 'spectacle'
import { MySlide } from '../components/my-slide'

export const PresentationLinks = () => (
  <MySlide title='Presentation links'>
    <List>
      <ListItem>
        <Link href='https://github.com/giacomorebonato/a11y-tips-for-web'>
          GitHub
        </Link>
      </ListItem>
      <ListItem>
        <Link target='_blank' href='https://a11y-tips-for-web.web.app/#/'>
          Presentation
        </Link>
      </ListItem>
      <ListItem>
        <Link target='_blank' href='https://a11yproject.com/'>
          A11Y Project
        </Link>
      </ListItem>
      <ListItem>
        <Link target='_blank' href='https://www.a11ywithlindsey.com/'>
          A11Y with Lindsey
        </Link>
      </ListItem>
    </List>
  </MySlide>
)

export const Questions = () => (
  <Slide bgColor='secondary'>
    <Heading textColor='tertiary'>Any questions?</Heading>
  </Slide>
)
