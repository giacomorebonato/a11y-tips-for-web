import React from 'react'
import {
  List,
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
    <Text textColor='primary'>
      They are a broad spectrum of devices or software depending on the type of
      disability: visual, auditory, motor or cognitive. <br /> Tools used by
      people with disabilities to use software/websites.
    </Text>
  </MySlide>
)
