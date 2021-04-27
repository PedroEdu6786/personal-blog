import Image from 'next/image'
import { chakra } from '@chakra-ui/system'

const PostImage = chakra(Image, {
  baseStyle: { minH: 200, minW: 315, objectFit: 'cover' },
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'layout'].includes(prop),
})

export default PostImage
