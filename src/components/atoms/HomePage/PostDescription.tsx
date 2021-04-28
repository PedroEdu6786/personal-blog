import { Text } from '@chakra-ui/layout'

const PostDescription = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>
}

export default PostDescription
