import { Box, Heading, HStack, Link, Text } from '@chakra-ui/layout'
import Emoji from '../../atoms/HomePage/Emoji'
import LinkR from '../../atoms/Shared/LinkR'

const Header = () => {
  return (
    <Box
      id="header"
      as="section"
      pos="fixed"
      zIndex="10"
      h={{ base: '5rem', md: '5.5rem' }}
      w="100%"
      bgColor="portfolio.white"
    >
      <HStack
        m="auto"
        maxW="1300px"
        align="center"
        justify="space-between"
        p="2rem"
      >
        {/* ---------------- LOGO ---------------- */}
        <LinkR href="/" decoration="none">
          <HStack align="center" spacing={{ base: '.3rem', md: '.5rem' }}>
            <Emoji symbol="👋🏻" />
            <Heading
              as="h3"
              fontSize={{ base: '.9rem', sm: '1rem', md: '1.25rem' }}
            >
              Pedro Cruz
            </Heading>
          </HStack>
        </LinkR>

        {/* ---------------- NAVBAR ---------------- */}
        <HStack
          as="nav"
          fontWeight="bold"
          w={{ sm: '10rem', md: '12rem' }}
          justify="space-between"
          fontSize={{ base: '.9rem', sm: '1rem', md: '1.25rem' }}
        >
          <LinkR href="/">
            <Text>Home</Text>
          </LinkR>
          <Link href="https://pcruz.vercel.app/">
            <Text>Portfolio</Text>
          </Link>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Header
