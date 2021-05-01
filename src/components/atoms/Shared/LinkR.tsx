import Link from 'next/link'
import { Box } from '@chakra-ui/layout'

const LinkR = ({
  href,
  as = href,
  children,
  decoration = 'underline',
  ...rest
}) => {
  return (
    <Link href={href} as={as}>
      <Box
        as="a"
        _hover={{ cursor: 'pointer', textDecoration: decoration }}
        {...rest}
      >
        {children}
      </Box>
    </Link>
  )
}

export default LinkR
