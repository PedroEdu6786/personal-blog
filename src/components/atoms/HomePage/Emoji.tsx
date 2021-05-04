import { Box, Heading } from '@chakra-ui/react'

const Emoji = ({ label = '', symbol, ...rest }) => {
  return (
    <Box
      as="span"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
      {...rest}
    >
      <Heading as="h3" size="md">
        {symbol}
      </Heading>
    </Box>
  )
}

export default Emoji
