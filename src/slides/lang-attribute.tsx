import React from 'react'
import { CodePane, Fill, Slide, Text } from 'spectacle'

import { MySlide } from '../components/my-slide'

const langHTML = `<html lang="en">
<body>
  <p>Below, I am going to make my screen reader speak french.</p>
  <p lang="fr">Je m'appelle Lindsey.</p>
  <p lang="fr">J'habite à Washington, DC.</p>
</body>
</html>`

export const LangAttribute = () => (
  <MySlide title='Screen readers know languages' withLayout={false}>
    <Text textColor='primary'>
      Add the lang attribute to your HTML tag and to other nested elements if
      you are using short sentences with different languages.
    </Text>
    <CodePane
      source={langHTML}
      style={{
        marginTop: '0.4em',
        fontSize: '0.8em'
      }}
    />
  </MySlide>
)
