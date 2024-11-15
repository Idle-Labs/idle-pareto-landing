import { Button, HStack, Image, Link } from '@chakra-ui/react'
import { Container } from './container'
import { VAULTS_FORM } from '../libs/vaults'

export function Header() {
  return (
    <Container position={{ lg: 'absolute' }} top={0} left={0} right={0}>
      <HStack width={'full'} paddingY={8} justifyContent={'space-between'}>
        <Link href="https://idle.finance/" target="_blank">
          <Image src="/logos/pareto.svg" alt="Pareto" width={114} height={27} />
        </Link>

        <HStack spacing={8}>
          <Link display={{ base: 'none', md: 'block' }} href="#advantages">
            Advantages
          </Link>
          <Link display={{ base: 'none', md: 'block' }} href="#partners">
            Partners
          </Link>
          <Button
            as="a"
            href={VAULTS_FORM}
            target="_blank"
            size="md"
            rightIcon={
              <Image
                src="/icons/arrow-up-right.svg"
                alt="Up"
                width={5}
                height={5}
              />
            }
          >
            Join
          </Button>
        </HStack>
      </HStack>
    </Container>
  )
}
