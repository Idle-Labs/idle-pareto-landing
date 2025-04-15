import type { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
import './globals.scss'

import { Providers } from './providers'
import GlobalCss from './global'
import { Header } from './components/header'
import { Footer } from './components/footer'

const baseUrl = new URL('https://pareto.credit/')
export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: 'Pareto | Radically transforming credit, on-chain',
  description:
    'A private credit marketplace for institutional borrowers and lenders',
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Pareto | Radically transforming credit, on-chain',
    description:
      'A private credit marketplace for institutional borrowers and lenders',
    siteName: 'Pareto',
    images: [
      {
        width: '1200',
        height: '630',
        url: '/logos/pareto-og.png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Pareto | Radically transforming credit, on-chain',
    description:
      'A private credit marketplace for institutional borrowers and lenders',
    images: [
      {
        width: '1200',
        height: '630',
        url: '/logos/pareto-og.png',
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
      <GlobalCss />
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
