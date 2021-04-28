import { Box, Stack } from '@chakra-ui/layout'
import Footer from '../organisms/Shared/Footer'
import Header from '../organisms/Shared/Header'

const BlogTemplate = ({ children }) => {
  return (
    <Stack align="center">
      {/* ---------------- HEADER ---------------- */}
      <Header />

      {/* ---------------- PAGE CONTENT ---------------- */}
      <Box
        w="100%"
        py={{ base: '7rem', md: '9rem', lg: '12rem' }}
        px={{ base: '2rem', md: '3rem', lg: '5rem' }}
        maxW="1300px"
      >
        {children}
      </Box>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </Stack>
  )
}

export default BlogTemplate
