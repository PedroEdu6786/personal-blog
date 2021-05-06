import { mode } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props) => ({
    body: {
      color: mode('portfolio.black', 'portfolio.white')(props),
      bg: mode('portfolio.white', 'portfolio.darkBg')(props),
    },
  }),
}
