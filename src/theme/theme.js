import { extendTheme } from '@chakra-ui/react'
import { styles } from './styles'
import { colors } from './foundations/colors'
import { fonts } from './foundations/fonts'

const theme = {
  styles,
  colors,
  fonts,
}

export default extendTheme(theme)
