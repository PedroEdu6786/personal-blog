import { Box, Stack } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'

const Bar = chakra(Box, {
  baseStyle: {
    borderRadius: '100px',
    h: '4px',
    transition: '.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  },
})

const MenuToggle = ({ setMenu, isOpen, ...rest }) => {
  return (
    <Stack
      as="label"
      w="30px"
      cursor="pointer"
      spacing=".35rem"
      zIndex="110"
      htmlFor="check"
      onClick={() => setMenu(!isOpen)}
      {...rest}
    >
      <Bar
        w="50%"
        transformOrigin="bottom"
        bgColor={isOpen ? 'portfolio.white' : 'portfolio.black'}
        transform={isOpen ? 'rotatez(45deg) translate(5px,1px)' : 'none'}
        as="span"
      ></Bar>
      <Bar
        transformOrigin="top"
        bgColor={isOpen ? 'portfolio.white' : 'portfolio.black'}
        transform={isOpen ? 'rotatez(-45deg)' : 'none'}
        as="span"
      ></Bar>
      <Bar
        w={isOpen ? '50%' : '75%'}
        transformOrigin="bottom"
        bgColor={isOpen ? 'portfolio.white' : 'portfolio.black'}
        transform={isOpen ? 'translate(14px,-5px) rotatez(45deg)' : 'none'}
        as="span"
      ></Bar>
    </Stack>
  )
}

export default MenuToggle
