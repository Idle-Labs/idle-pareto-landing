'use client'

import { Global } from '@emotion/react'

const GlobalCss = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'GT America Mono';
        src: url('fonts/GTAmericaMono-Regular.woff2') format('woff2'),
            url('fonts/GTAmericaMono-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'GT Sectra';
        src: url('fonts/GTSectra-Regular.woff2') format('woff2'),
            url('fonts/GTSectra-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }`}
  />
)

export default GlobalCss
