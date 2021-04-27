import { Text } from '@chakra-ui/layout'

const Date = ({ children, ...rest }) => {
  return (
    <Text color="portfolio.darkBlue" fontWeight="semibold" {...rest}>
      {children}
    </Text>
  )
}

export default Date
