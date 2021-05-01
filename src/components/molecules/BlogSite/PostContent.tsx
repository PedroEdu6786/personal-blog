import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'

const PostContent = styled(Box)`
  h1,
  h2,
  h3 {
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.875rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  pre {
    margin: 2rem 0;
    padding: 1rem;
    background-color: #f2f2f2;
    color: #4b4b4b;
    border-radius: 5px;
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
    img {
      border-radius: 10px;
      margin: auto;
      @media (min-width: 768px) {
        width: 700px;
      }
    }
    code {
      padding: 0.25rem;
      background-color: #f2f2f2;
      color: #4b4b4b;
      border-radius: 5px;
    }
  }
  ul,
  ol {
    margin-left: 1rem;
    li {
      p {
        margin: 0;
      }
    }
  }

  blockquote {
    border-left: 5px solid #e6e6e6;
    margin: 1.5em 0;
    p {
      padding-left: 1rem;
      font-style: italic;
    }
  }
`

export default PostContent
