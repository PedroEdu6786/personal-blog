import { Heading } from '@chakra-ui/layout'

const PostTitle = ({ children, ...rest }) => {
  return (
    <Heading as="h3" {...rest}>
      {children}
    </Heading>
  )
}

export default PostTitle
