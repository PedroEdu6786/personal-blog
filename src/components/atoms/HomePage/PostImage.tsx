import Image from 'next/image'
import { chakra } from '@chakra-ui/system'

const PostImage = chakra(Image, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

export default PostImage
