import { createIcon } from '@chakra-ui/react'

export const ArrowUpIcon = createIcon({
  displayName: 'Up',
  viewBox: '0 0 20 20',
  path: [
    <path
      d="M18.3333 0H20V1.66667V18.3333V20H16.6667V18.3333V5.69444L3.69374 18.6667L2.51318 19.8472L0.152071 17.4861L1.33263 16.3056L14.3056 3.33333H1.66667H0V0H1.66667H18.3333Z"
      fill="currentColor"
      key={1}
    />,
  ],
})

export const CheckIcon = createIcon({
  displayName: 'Check',
  viewBox: '0 0 36 30',
  path: [
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.945 21.4002L3.58391 13.0002L0.796875 15.8002L11.945 27.0002L35.8339 3.0002L33.0469 0.200195L11.945 21.4002Z"
      key={1}
      fill="currentColor"
    />,
  ],
})

export const XIcon = createIcon({
  displayName: 'X',
  viewBox: '0 0 36 30',
  path: [
    <path
      d="M1.875 1.875L28.125 28.125"
      stroke="currentColor"
      strokeWidth="4"
      key={1}
    />,
    <path
      d="M1.875 28.125L28.125 1.875"
      stroke="currentColor"
      strokeWidth="4"
      key={2}
    />,
  ],
})
