import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
            font-family: 'Montserrat';
            src: url('/fonts/Montserrat-Regular.ttf');
            font-style: normal;
            font-weight: 400;
            font-display: swap;
        }

        @font-face {
            font-family: 'Montserrat';
            src: url('/fonts/Montserrat-SemiBold.ttf');
            font-style: semibold;
            font-weight: 600;
            font-display: swap;
        }

        @font-face {
            font-family: 'Montserrat';
            src: url('/fonts/Montserrat-Bold.ttf');
            font-style: bold;
            font-weight: 700;
            font-display: swap;
        }
        `}
    />
  )
}

export default Fonts
