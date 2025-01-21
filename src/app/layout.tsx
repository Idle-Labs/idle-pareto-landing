import type { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
import './globals.scss'

import { Providers } from './providers'
import { Header } from './components/header'
import { Footer } from './components/footer'

const baseUrl = new URL('https://pareto.credit/')
export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: 'Pareto',
  description:
    'A marketplace of scaled on-chain credit facilities that displace legacy lending infrastructure and loan origination processes at each stage of the loan lifecycle.',
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Pareto',
    description:
      'A marketplace of scaled on-chain credit facilities that displace legacy lending infrastructure and loan origination processes at each stage of the loan lifecycle.',
    siteName: 'Pareto',
    images: [
      {
        width: '1200',
        height: '630',
        url: '/logos/pareto-full-og.png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Pareto',
    description:
      'A marketplace of scaled on-chain credit facilities that displace legacy lending infrastructure and loan origination processes at each stage of the loan lifecycle.',
    images: [
      {
        width: '1200',
        height: '630',
        url: '/logos/pareto-full-og.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Box as="main">{children}</Box>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
