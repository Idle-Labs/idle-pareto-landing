import { Box, BoxProps } from '@chakra-ui/react'

interface ContainerProps extends BoxProps {
  children: React.ReactNode
}

export function Container({ children, ...boxProps }: ContainerProps) {
  return (
    <Box
      margin={'0 auto'}
      alignItems={'stretch'}
      boxSizing="border-box"
      paddingX={{ base: '20px', lg: '0' }}
      width={{ base: 'auto', lg: '950px', xl: '1280px' }}
      {...boxProps}
    >
      {children}
    </Box>
  )
}
