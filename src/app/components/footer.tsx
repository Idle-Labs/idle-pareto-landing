import { HStack, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { Container } from './container'
import { VAULTS_FORM } from '../libs/vaults'

export function Footer() {
  return (
    <Container paddingTop={{ lg: '100px' }} paddingBottom={10}>
      <VStack spacing={10}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          width={'full'}
          alignItems={'initial'}
          spacing={10}
        >
          <VStack alignItems={'start'} flex={1}>
            <Link href="#vaults">
              <Image src="/logos/pareto.svg" alt="Pareto" />
            </Link>
            <HStack spacing={2}>
              <Text>Brought to you by</Text>
              <Link href="https://idle.finance/" target="_blank">
                <Image src="/logos/idle.svg" alt="Pareto" width={'80px'} />
              </Link>
            </HStack>
          </VStack>
          <Menu
            title="Strategies"
            items={[
              { label: 'FAS_USDC', url: '#FAS_USDC' },
              { label: 'BAS_USDT', url: '#BAS_USDT' },
            ]}
          />
          <Menu
            title="Resources"
            items={[
              {
                label: 'Documentation',
                url: 'https://docs.idle.finance/',
                target: '_blank',
              },
              {
                label: 'Contact Us',
                url: VAULTS_FORM,
                target: '_blank',
              },
            ]}
          />
        </Stack>
        <Text fontSize={'sm'} color={'greyLight'}>
          All content available on this Website is general in nature, not
          directed or tailored to any particular person, and is for
          informational purposes only. Neither the Website nor any of its
          content is offered as investment advice and should not be deemed as
          investment advice or a recommendation to purchase or sell any specific
          security. The information contained herein reflects the opinions and
          projections of Idle DAO LLC or Pareto as of the date hereof, which are
          subject to change without notice at any time. Idle DAO LLC or Pareto
          do not represent that any opinion or projection will be realized.
          Neither Idle DAO LL nor Pareto nor any of its advisers, officers,
          directors, or affiliates represents that the information presented on
          this Website is accurate, current or complete, and such information is
          subject to change without notice. Any performance information must be
          considered in conjunction with applicable disclosures. Past
          performance is not a guarantee of future results. Neither this Website
          nor its contents should be construed as legal, tax, or other advice.
          Individuals are urged to consult with their own tax or legal advisers
          before entering into any advisory contract.
        </Text>
      </VStack>
    </Container>
  )
}

function Menu({
  title,
  items,
}: {
  title: string
  items: { label: string; url: string; target?: '_blank' | '_self' }[]
}) {
  return (
    <VStack alignItems={'stretch'} spacing={3}>
      <Text>{title}</Text>
      {items.map((item, i) => (
        <Link href={item.url} key={i} color={'grey'} target={item.target}>
          {item.label}
        </Link>
      ))}
    </VStack>
  )
}
