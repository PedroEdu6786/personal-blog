import { Box, Stack } from '@chakra-ui/layout'
import Footer from '../organisms/Shared/Footer'
import Header from '../organisms/Shared/Header'

const BlogTemplate = ({ children }) => {
  return (
    <Stack align="center">
      {/* ---------------- HEADER ---------------- */}
      <Header />

      {/* ---------------- PAGE CONTENT ---------------- */}
      <Box w="100%" px="2rem">
        {children}
      </Box>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </Stack>
  )
}

export default BlogTemplate
