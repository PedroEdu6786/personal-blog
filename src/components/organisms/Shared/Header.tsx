import { Box, Heading, HStack, Link, Text } from '@chakra-ui/layout'
import { Button, Icon, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'
import Emoji from '../../atoms/HomePage/Emoji'
import LinkR from '../../atoms/Shared/LinkR'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const BG = useColorModeValue('portfolio.white', 'portfolio.darkBg')

  return (
    <Box
      id="header"
      as="section"
      pos="fixed"
      zIndex="10"
      h={{ base: '5rem', md: '5.5rem' }}
      w="100%"
      bgColor={BG}
    >
      <HStack
        m="auto"
        maxW="1300px"
        align="center"
        justify="space-between"
        p={{ base: '1.5rem', md: '2rem' }}
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
          w={{ sm: '10rem', md: '15rem' }}
          justify="space-between"
          fontSize={{ base: '.9rem', sm: '1rem', md: '1.25rem' }}
          spacing={{ base: '.5rem', md: '.8rem', lg: '1.5rem' }}
        >
          <LinkR href="/">
            <Text>Home</Text>
          </LinkR>
          <Link href="https://pcruz.vercel.app/">
            <Text>Portfolio</Text>
          </Link>
          <Button size="md" onClick={toggleColorMode}>
            {colorMode === 'light' ? (
              <Icon
                as={FiMoon}
                fontSize={{ base: '.9rem', sm: '1rem', md: '1.25rem' }}
              />
            ) : (
              <Icon
                as={FiSun}
                fontSize={{ base: '.9rem', sm: '1rem', md: '1.25rem' }}
              />
            )}
          </Button>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Header
