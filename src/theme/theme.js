import { extendTheme } from '@chakra-ui/react'
import { styles } from './styles'
import { colors } from './foundations/colors'
import { fonts } from './foundations/fonts'

const theme = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles,
  colors,
  fonts,
}

export default extendTheme(theme)
