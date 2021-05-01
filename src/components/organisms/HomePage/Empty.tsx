import { Box, Center, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import PostImage from '../../atoms/HomePage/PostImage'
import ButtonAction from '../../atoms/Shared/ButtonAction'

const Empty = () => {
  const portfolioRedirect = () => {
    window.location.href = 'https://pcruz.vercel.app/'
  }

  return (
    <Stack my="4rem" spacing="4rem">
      <Stack
        align="center"
        justify="center"
        spacing="4rem"
        direction={{ base: 'column', md: 'row' }}
      >
        <Heading
          fontWeight="semibold"
          size="3xl"
          width={{ md: '50%' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          No Posts Available Coming soon...
        </Heading>
        <Box
          w={{ base: '200px', md: '250px', xl: '300px' }}
          h={{ base: '200px', md: '250px', xl: '300px' }}
          pos="relative"
        >
          <PostImage src="/logo.png" alt="logo" layout="fill" />
        </Box>
      </Stack>
      <Center>
        <Stack spacing="1rem" fontSize={{ base: '1.25rem', md: '1.5rem' }}>
          <Text>Check out my porfolio</Text>
          <ButtonAction onClick={portfolioRedirect}>Click Here</ButtonAction>
        </Stack>
      </Center>
    </Stack>
  )
}

export default Empty
