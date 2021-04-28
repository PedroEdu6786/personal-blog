import { Box, Heading, HStack, Text } from '@chakra-ui/layout'
import Emoji from '../../atoms/HomePage/Emoji'

const Header = () => {
  return (
    <Box
      id="header"
      as="section"
      pos="fixed"
      zIndex="10"
      h={{ base: '5rem', md: '5.5rem' }}
      w="100%"
      bgColor="portfolio.gray"
    >
      <HStack
        m="auto"
        maxW="1300px"
        align="center"
        justify="space-between"
        p="2rem"
      >
        {/* ---------------- LOGO ---------------- */}
        <HStack align="center">
          <Emoji symbol="👋🏻" />
          <Heading as="h3" fontSize={{ base: '1rem', md: '1.25rem' }}>
            Pedro Cruz
          </Heading>
        </HStack>

        {/* ---------------- NAVBAR ---------------- */}
        <HStack
          fontWeight="bold"
          w={{ sm: '12rem', md: '15rem' }}
          justify="space-between"
          fontSize={{ base: '1rem', md: '1.25rem' }}
        >
          <Text>Home</Text>
          <Text>My Portfolio</Text>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Header
