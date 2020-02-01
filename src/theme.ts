import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')
require('./global.css')

export const theme = createTheme(
  {
    primary: '#fff',
    secondary: '#4d4a4a',
    tertiary: '#03A9FC',
    quaternary: '#fc9220'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)
