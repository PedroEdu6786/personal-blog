import { Text } from '@chakra-ui/layout'

const PublishDate = ({ children, ...rest }) => {
  //  gets date timestamp in milliseconds
  const timestamp = Date.parse(children)

  //writes date in UTC format
  let date = new Date(timestamp).toString()

  //gets date in MM DD YYYY format
  date = date.split(' ').slice(1, 4).join(' ')

  return (
    <Text color="portfolio.darkBlue" fontWeight="semibold" {...rest}>
      {date}
    </Text>
  )
}

export default PublishDate
