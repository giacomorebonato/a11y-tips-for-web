import React from 'react'
import {
  Fill,
  Fit,
  Image,
  List,
  Link,
  ListItem,
  Text,
  Table,
  TableBody,
  TableRow,
  TableItem
} from 'spectacle'

import { MySlide } from '../components/my-slide'

export const Disabilities = () => (
  <MySlide title='Disabilities'>
    <Table textColor='primary'>
      <TableBody>
        <TableRow style={{ height: '2em' }}>
          <TableItem>
            <strong> Visual:</strong>
          </TableItem>
          <TableItem style={{ fontSize: '1em' }}>
            blindness, color blindness, poor vision
          </TableItem>
        </TableRow>
        <TableRow style={{ height: '2em' }}>
          <TableItem>
            <strong>Muscular:</strong>
          </TableItem>
          <TableItem style={{ fontSize: '1em' }}>
            musculoskeletal disorders, cerebral palsy
          </TableItem>
        </TableRow>
        <TableRow style={{ height: '2em' }}>
          <TableItem>
            <strong>Auditory:</strong>
          </TableItem>
          <TableItem style={{ fontSize: '1em' }}>
            hearing loss, deafness
          </TableItem>
        </TableRow>
        <TableRow style={{ height: '2em' }}>
          <TableItem>
            <strong>Learning:</strong>
          </TableItem>
          <TableItem style={{ fontSize: '1em' }}>ADHD, dyslexia</TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </MySlide>
)

export const OtherCases = () => (
  <MySlide title='Other cases'>
    <List textColor='primary'>
      <ListItem>Keyboard only users</ListItem>
      <ListItem>Injuries</ListItem>
      <ListItem>Small devices</ListItem>
      <ListItem>Driving a car</ListItem>
    </List>
  </MySlide>
)

export const AssistiveTechnologies = () => (
  <MySlide title='Assistive technologies'>
    <Text textColor='primary' textSize='1em'>
      They are a broad spectrum of devices or software depending on the type of
      disability: visual, auditory, motor or cognitive. <br /> Tools used by
      people with disabilities to use software/websites.
    </Text>
  </MySlide>
)

export const XBoxAdaptive = () => (
  <MySlide title='Xbox Adaptive Controller' withLayout>
    <Fill>
      <Image src='/images/xbox-adaptive.jpg' />
    </Fill>
    <Text>
      <Link
        href='https://www.xbox.com/en-US/accessories/controllers/xbox-adaptive-controller'
        target='_blank'
      >
        Landing page
      </Link>
    </Text>
  </MySlide>
)

export const OtherAssistiveTechnologies = () => (
  <MySlide title='Other assistive technologies'>
    <List>
      <ListItem>
        <Link href='https://support.apple.com/en-ie/HT201370' target='_blank'>
          IOS Switch Control
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href='https://www.apple.com/uk-business/shop/product/HJ2W2LL/A/ablenet-blue2-bluetooth-switch'
          target='_blank'
        >
          AbleNet 2
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href='https://www.youtube.com/watch?v=ftIzRYoVRKY'
          target='_blank'
        >
          Tap Strap
        </Link>
      </ListItem>
    </List>
  </MySlide>
)
