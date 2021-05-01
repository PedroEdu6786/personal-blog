import Head from 'next/head'
import { Box } from '@chakra-ui/layout'
import { SEO } from '../../../interfaces/Seo'

const MetaHead = ({ pageTitle, description }: SEO) => {
  return (
    <Box>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="description" content={description} key="description" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} key="title" />
        <meta
          property="og:description"
          content={description}
          key="description"
        />
        {/* <meta
          property="og:image"
          content="{{course.attributes.image-info.fbshare.url}}"
        />
        <meta
          property="og:image:width"
          content="{{course.attributes.image-info.fbshare.width}}"
        />
        <meta
          property="og:image:height"
          content="{{course.attributes.image-info.fbshare.height}}"
        /> */}
      </Head>
    </Box>
  )
}

export default MetaHead
