import { Heading } from '@chakra-ui/layout'

const PostTitle = ({ children }) => {
  return (
    <Heading as="h3" size="lg">
      {children}
    </Heading>
  )
}

export default PostTitle
