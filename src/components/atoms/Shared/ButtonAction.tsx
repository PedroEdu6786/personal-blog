import { Button } from '@chakra-ui/button'

const ButtonAction = ({ children, ...rest }) => {
  return (
    <Button
      variant="outline"
      size="lg"
      fontSize={{ base: '1.25rem', md: '1.5rem' }}
      p="1.5rem"
      borderWidth=".25rem"
      borderColor="portfolio.blue"
      _hover={{
        bg: 'portfolio.blue',
        color: 'portfolio.white',
        transform: 'scale(1.125)',
        borderColor: 'portfolio.blue',
      }}
      _active={{
        bg: 'portfolio.blue',
        color: 'portfolio.white',
        transform: 'scale(0.98)',
        borderColor: 'portfolio.blue',
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ButtonAction
