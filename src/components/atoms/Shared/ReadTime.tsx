import Icon from '@chakra-ui/icon'
import { HStack, Text } from '@chakra-ui/layout'
import { FiClock } from 'react-icons/fi'

const ReadTime = ({ readingTime }) => {
  return (
    <HStack align="center" color="portfolio.darkGray">
      <Icon as={FiClock} />
      <Text>{readingTime} min read</Text>
    </HStack>
  )
}

export default ReadTime
