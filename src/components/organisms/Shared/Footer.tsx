import { Box, HStack, Text } from '@chakra-ui/layout'
import Emoji from '../../atoms/HomePage/Emoji'

const Footer = () => {
  return (
    <Box id="footer" as="footer" w="100%" pt="5rem" pos="absolute" bottom="0">
      <HStack
        w="100%"
        p="2rem"
        bgColor="portfolio.darkBlue"
        color="portfolio.white"
        fontWeight="semibold"
        fontSize={{ base: '1rem', md: '1.25rem' }}
        justify="center"
      >
        <Text>Made with </Text>
        <Emoji symbol="❤️" />
        <Text>by Pedro Cruz</Text>
      </HStack>
    </Box>
  )
}

export default Footer
