'use client'

import {
  Image as ChakraImage,
  Box,
  Heading,
  Text,
  Wrap,
  WrapItem,
  useDisclosure,
  HStack,
  Card,
  CardHeader,
  Tag,
  TagLabel,
  CardBody,
  CardFooter,
  VStack,
  Button,
  Center,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Link,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import bg from '../../public/json/bg.json'

import CustomModal from './components/modal'
import {
  VAULTS,
  VAULTS_ADVANTAGES,
  VAULTS_APP,
  VAULTS_FEATURES,
  VAULTS_FORM,
} from './libs/vaults'
import { Container } from './components/container'
import { ArrowUpIcon, CheckIcon, HiddenIcon, XIcon } from './icons'
import { Bar } from 'react-chartjs-2'
import { useMemo, useEffect, useRef } from 'react'

export default function Home() {
  return (
    <Box>
      <Hero />
      <Vaults />
      <Advantages />
      {/* <Comparison /> */}
      {/* <Features /> */}
      <CallToActions />
    </Box>
  )
}

function Hero() {
  return (
    <Container height={{ lg: '75vh' }} pt={{ lg: '18vh' }}>
      <VStack spacing={2} alignItems={'stretch'} py={{ base: 15, lg: '0' }}>
        <Heading as="h1" size="2xl">
          Radically transforming <br />
          credit, on-chain
        </Heading>
        <Text>
          Building a marketplace of scaled on-chain credit facilities that
          displace legacy lending <br />
          infrastructure and loan origination processes at each stage of the
          loan lifecycle.
        </Text>
      </VStack>
    </Container>
  )
}

function Vaults() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container position={'relative'}>
      <Stack
        id="vaults"
        pb={{ base: 20, lg: 0 }}
        position={{ lg: 'absolute' }}
        top={{ lg: '-30vh' }}
        left={0}
        right={0}
        spacing={50}
        direction={['column', 'column', 'column', 'row']}
      >
        <VaultCard
          code="FAS_USDC"
          onClick={() =>
            window.open(
              'https://app.pareto.credit/vault#0x45054c6753b4Bce40C5d54418DabC20b070F85bE',
              '_blank',
            )
          }
        />
        <VaultCard
          code="BAS_USDT"
          onClick={() =>
            window.open(
              'https://app.pareto.credit/vault#0xaE65d6C295E4a28519182a632FB25b7C1966AED7',
              '_blank',
            )
          }
        />
        <VaultCard
          code="FAL_USDC"
          onClick={() =>
            window.open(
              'https://app.pareto.credit/vault#0x24e16F9Fad32891f8bA69cE8fEdd273A2649331A',
              '_blank',
            )
          }
        />
      </Stack>

      <CustomModal isOpen={isOpen} onClose={onClose}></CustomModal>
    </Container>
  )
}

function VaultCard({ code, onClick }: { code: string; onClick: () => void }) {
  const vault = VAULTS.find((v) => v.code === code)

  if (!vault) {
    return <></>
  }

  return (
    <Card
      id={code}
      variant={vault.cardVariant}
      onClick={onClick}
      cursor={'pointer'}
      flex={1}
    >
      <CardHeader display={'flex'} justifyContent={'space-between'}>
        <ChakraImage
          src={vault.logo}
          alt="Bastion"
          height={vault.logoHeight || '60px'}
          width={vault.logoWidth || '150px'}
        />
        <Box display={{ base: 'none', sm: 'inline' }} p={1}>
          <ArrowUpIcon width={8} height={8} />
        </Box>
      </CardHeader>
      <CardBody>
        <HStack marginBottom={4}>
          <Tag variant={'outline'} colorScheme="black" flexShrink={0}>
            <TagLabel>{vault.underlying}</TagLabel>
          </Tag>
          <Tag variant={'outline'} colorScheme="black" flexShrink={0}>
            <TagLabel>{vault.loanType}</TagLabel>
          </Tag>
          {vault.curatedBy && (
            <Tag variant={'outline'} colorScheme="black" flexShrink={0}>
              <TagLabel>Curated by {vault.curatedBy}</TagLabel>
            </Tag>
          )}
        </HStack>
        <Text fontWeight={'bold'}>{vault.name}</Text>
        <Text>{vault.description}</Text>
      </CardBody>
      <CardFooter fontSize={'xl'}>
        <Wrap width={'full'} justify={'space-between'}>
          <WrapItem>
            <VStack alignItems={'start'} spacing={0}>
              <Text fontSize={'sm'} noOfLines={1} wordBreak={'break-all'}>
                TVL
              </Text>
              <Text fontWeight={'bold'}>{vault.tvl}</Text>
            </VStack>
          </WrapItem>
          {vault.yield && (
            <WrapItem>
              <VStack alignItems={'start'} spacing={0}>
                <Text fontSize={'sm'} noOfLines={1} wordBreak={'break-all'}>
                  {vault.yieldType || 'Yield'}
                </Text>
                {vault.yield === 'hidden' ? (
                  <HiddenIcon height={'35px'} width={'25px'} />
                ) : (
                  <Text fontWeight={'bold'}>{vault.yield}</Text>
                )}
              </VStack>
            </WrapItem>
          )}
          {vault.curator && (
            <WrapItem>
              <VStack alignItems={'start'} spacing={0}>
                <Text fontSize={'sm'} noOfLines={1} wordBreak={'break-all'}>
                  Curator/Administrator
                </Text>
                <Link
                  href={vault.curatorLink}
                  target="_blank"
                  fontWeight={'bold'}
                >
                  {vault.curator}
                </Link>
              </VStack>
            </WrapItem>
          )}
          <WrapItem>
            <VStack alignItems={'start'} spacing={0}>
              <Text fontSize={'sm'} noOfLines={1} wordBreak={'break-all'}>
                Redemptions
              </Text>
              <Text fontWeight={'bold'}>{vault.redemptions}</Text>
            </VStack>
          </WrapItem>
        </Wrap>
      </CardFooter>
    </Card>
  )
}

function Advantages() {
  const advantages = VAULTS_ADVANTAGES
  return (
    <Box
      id="advantages"
      width={'full'}
      layerStyle={'lightGradient'}
      paddingTop={{ base: 20, lg: '25vh' }}
      paddingBottom={{ base: 20, lg: '25vh' }}
    >
      <Container>
        <VStack spacing={10} alignItems={'stretch'}>
          <Box>
            <Heading as="h3">Advantages</Heading>
            <Text>
              Liquidity built for the future, available today. Learn why.
            </Text>
          </Box>
          {advantages.map((adv, k) => (
            <Advantage key={k} advantage={adv} />
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

function Advantage({
  advantage: { icon, title, description },
}: {
  advantage: { icon: string; title: string; description: string }
}) {
  return (
    <HStack spacing={{ base: 5, md: 10 }} paddingX={{ lg: 5 }}>
      <ChakraImage
        src={icon}
        width={{ base: '80px', md: '90px' }}
        alt={title}
      />
      <VStack alignItems={'stretch'} spacing={1}>
        <Heading as="h4" size={'lg'}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  )
}

function Comparison() {
  const logos = useMemo(
    () => [
      '/logos/fasanara-icon.svg',
      '/logos/ethena-icon.svg',
      '/logos/superstate-icon.svg',
      '/logos/falconx-icon.svg',
      '/logos/clearpool-icon.svg',
      '/logos/maple-icon.svg',
    ],
    [],
  )
  let logosCaches = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    logosCaches.current = logos.map((src) => {
      const img = new Image()
      img.src = src
      return img
    })
  })

  const drawFasLogos = useMemo(() => {
    return {
      id: 'drawLogos',
      afterDatasetsDraw: (chart: any) => {
        const xAxis = chart.scales.x
        const ctx = chart.ctx
        const fromLeft = chart.width > 1000 ? 120 : chart.width > 900 ? 84 : 63
        const imgW = chart.width > 1000 ? 240 : chart.width > 900 ? 168 : 126
        const imgH = chart.width > 1000 ? 40 : chart.width > 900 ? 28 : 21

        xAxis.ticks.forEach((_: any, index: number) => {
          const x = xAxis.getPixelForTick(index) - fromLeft
          const y = chart.height - 40
          const img = logosCaches.current[index]
          ctx.drawImage(img, x, y, imgW, imgH)
        })
      },
    }
  }, [logosCaches])
  const drawFalLogos = useMemo(() => {
    return {
      id: 'drawLogos',
      afterDatasetsDraw: (chart: any) => {
        const xAxis = chart.scales.x
        const ctx = chart.ctx
        const fromLeft = chart.width > 1000 ? 120 : chart.width > 900 ? 84 : 63
        const imgW = chart.width > 1000 ? 240 : chart.width > 900 ? 168 : 126
        const imgH = chart.width > 1000 ? 40 : chart.width > 900 ? 28 : 21

        xAxis.ticks.forEach((_: any, index: number) => {
          const x = xAxis.getPixelForTick(index) - fromLeft
          const y = chart.height - 40
          const img = logosCaches.current[index + 3]
          ctx.drawImage(img, x, y, imgW, imgH)
        })
      },
    }
  }, [logosCaches])

  return (
    <Box
      width={'full'}
      layerStyle={'grayGradient'}
      paddingTop={20}
      paddingBottom={{ base: 20, lg: '25vh' }}
    >
      <Container>
        <Tabs variant="rounded" isLazy={true}>
          <VStack alignItems={'stretch'} spacing={10}>
            <Stack
              width={'full'}
              alignItems={{ base: 'start', lg: 'center' }}
              justifyContent={{ base: 'initial', lg: 'space-between' }}
              spacing={{ base: 5, lg: 0 }}
              direction={{ base: 'column', lg: 'row' }}
            >
              <VStack alignItems={'stretch'}>
                <Heading as="h3">Which is better?</Heading>
                <Text>On-chain credit solutions tailored to your needs.</Text>
              </VStack>
              <TabList>
                <Tab _selected={{ background: 'greenGradient' }}>Fasanara</Tab>
                <Tab _selected={{ background: 'blueGradient' }}>FalconX</Tab>
              </TabList>
            </Stack>
            <TabPanels>
              <TabPanel>
                <Bar
                  id="fas"
                  height={'400px'}
                  width={'full'}
                  plugins={[drawFasLogos, ChartDataLabels]}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        ticks: {
                          padding: 20,
                          callback: () => '',
                        },
                      },
                      y: {
                        beginAtZero: true,
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    animation: {
                      delay: 1,
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                      datalabels: {
                        color: 'white',
                        font: {
                          size: 30,
                          weight: 'bold',
                        },
                        formatter: (value) => `${value}%*`,
                      },
                    },
                  }}
                  data={{
                    labels: ['Fasanara', 'Ethena', 'Superstate'],
                    datasets: [
                      {
                        label: 'APY',
                        data: [13, 11, 2.6],
                        backgroundColor: [
                          'rgba(12,143,112,.8)',
                          'rgba(150,150,150,.8)',
                          'rgba(150,150,150,.8)',
                        ],
                        borderColor: [
                          'rgba(12,143,112,1)',
                          'rgba(150,150,150,1)',
                          'rgba(150,150,150,1)',
                        ],
                        borderRadius: 10,
                        borderWidth: 3,
                        maxBarThickness: 200,
                      },
                    ],
                  }}
                ></Bar>
              </TabPanel>
              <TabPanel>
                <Bar
                  id="fal"
                  height={'400px'}
                  width={'full'}
                  plugins={[drawFalLogos, ChartDataLabels]}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        ticks: {
                          padding: 20,
                          callback: () => '',
                        },
                      },
                      y: {
                        beginAtZero: true,
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    animation: {
                      delay: 1,
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                      datalabels: {
                        color: 'white',
                        font: {
                          size: 30,
                          weight: 'bold',
                        },
                        formatter: (value) => `${value}%*`,
                      },
                    },
                  }}
                  data={{
                    labels: ['FalconX', 'Clearpool', 'Maple'],
                    datasets: [
                      {
                        label: 'APY',
                        data: [15, 10, 9.5],
                        backgroundColor: [
                          'rgba(7,61,124,.8)',
                          'rgba(150,150,150,.8)',
                          'rgba(150,150,150,.8)',
                        ],
                        borderColor: [
                          'rgba(7,61,124,1)',
                          'rgba(150,150,150,1)',
                          'rgba(150,150,150,1)',
                        ],
                        borderRadius: 10,
                        borderWidth: 3,
                        maxBarThickness: 200,
                      },
                    ],
                  }}
                ></Bar>
              </TabPanel>
            </TabPanels>
          </VStack>
        </Tabs>
        <Text color={'GrayText'} mt={5} fontSize={'sm'}>
          *Avg APY in last 30 days
        </Text>
      </Container>
    </Box>
  )
}

function Features() {
  const features = VAULTS_FEATURES

  return (
    <Box
      width={'full'}
      layerStyle={'grayGradient'}
      paddingTop={20}
      paddingBottom={{ base: 20, lg: '25vh' }}
    >
      <Container>
        <Stack
          marginBottom={10}
          spacing={{ base: 10, lg: 0 }}
          justifyContent={'space-between'}
          width={'full'}
          direction={{ base: 'column', lg: 'row' }}
        >
          <VStack alignItems={'stretch'}>
            <Heading as="h3">What’s better?</Heading>
            <Text>On-chain credit solutions tailored to your needs.</Text>
          </VStack>

          <HStack
            spacing={{ lg: 10 }}
            paddingX={{ base: 10, lg: 7 }}
            marginRight={10}
            justifyContent={{ base: 'space-between', lg: 'center' }}
          >
            <ChakraImage
              src="/logos/pareto.svg"
              alt="Pareto"
              width={114}
              height={27}
            />
            <Text fontSize={'lg'}>Others</Text>
          </HStack>
        </Stack>
        <VStack spacing={0} alignItems={'stretch'}>
          {features.map((f, i) => (
            <Feature feature={f} key={i} isOdd={i % 2 === 0} />
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

function Feature({
  feature,
  isOdd,
}: {
  feature: {
    title: string
    description: string
    pareto: boolean
    others: boolean
  }
  isOdd: boolean
}) {
  const { title, description, pareto, others } = feature

  const yesIcon = (
    <CheckIcon width={'30px'} height={'30px'} color={'blueLight'} />
  )
  const noIcon = <XIcon width={'30px'} height={'30px'} />

  return (
    <Box layerStyle={isOdd ? 'whiteGradientShadow' : ''} padding={10}>
      <Stack
        spacing={{ base: 5, lg: 0 }}
        direction={{ base: 'column', lg: 'row' }}
      >
        <VStack alignItems={'stretch'} flex={1}>
          <Heading as="h4" size={'lg'}>
            {title}
          </Heading>
          <Text>{description}</Text>
        </VStack>
        <HStack
          spacing={100}
          paddingX={10}
          justifyContent={{ base: 'space-between', lg: 'center' }}
        >
          {pareto ? yesIcon : noIcon}
          {others ? yesIcon : noIcon}
        </HStack>
      </Stack>
    </Box>
  )
}

function CallToActions() {
  return (
    <Container position={{ lg: 'relative' }} height={{ lg: '300px' }}>
      <Stack
        position={{ lg: 'absolute' }}
        top={{ lg: '-10vh' }}
        paddingY={{ base: 20, lg: 0 }}
        left={0}
        right={0}
        spacing={50}
        alignItems={'stretch'}
        direction={['column', 'column', 'column', 'row']}
      >
        <PartnersCard />
        <ContactUsCard />
      </Stack>
    </Container>
  )
}

function PartnersCard() {
  return (
    <Card id="partners" variant={'partners'}>
      <CardBody>
        <VStack spacing={3} justifyContent={'stretch'} alignItems={'initial'}>
          <Heading as="h4" size={'lg'}>
            Partners
          </Heading>
          <Text>
            Collaborating with leading traditional and digital asset investment
            institutions dedicated to driving the adoption of tokenization in
            traditional finance and credit markets.
          </Text>
          <Wrap
            paddingTop={[5, 5, 5, 5, 10]}
            spacing={[5, 5, 5, 5, 10]}
            align="center"
            justify={'center'}
          >
            <WrapItem>
              <Center paddingX={[2, 2, 2, 2, 5]}>
                <ChakraImage
                  src="/logos/rockaway.svg"
                  alt="Rockaway"
                  width={['130px']}
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center paddingX={[2, 2, 2, 2, 5]}>
                <ChakraImage
                  src="/logos/fasanara.svg"
                  alt="Fasanara"
                  width={['100px']}
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center paddingX={[2, 2, 2, 2, 5]}>
                <ChakraImage
                  src="/logos/maven.svg"
                  alt="Maven"
                  width={['70px']}
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center paddingX={[2, 2, 2, 2, 5]}>
                <ChakraImage
                  src="/logos/falconX.svg"
                  alt="FalconX"
                  width={['140px']}
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center paddingX={[2, 2, 2, 2, 5]}>
                <ChakraImage
                  src="/logos/bastion.svg"
                  alt="Bastion"
                  width={['120px']}
                />
              </Center>
            </WrapItem>
          </Wrap>
        </VStack>
      </CardBody>
    </Card>
  )
}

function ContactUsCard() {
  return (
    <Card id="contactUs" overflow={'hidden'} position={'relative'}>
      <CardBody color={'white'} zIndex={2}>
        <VStack spacing={3} justifyContent={'stretch'} alignItems={'initial'}>
          <Heading as="h4" size={'lg'}>
            Contact Us
          </Heading>
          <Text>
            We are building the future of credit to reduce cost, improve speed
            and expand products for real world impact. Connect with our team to
            learn about our tokenized credit solutions.
          </Text>
        </VStack>
      </CardBody>
      <CardFooter justifyContent={'end'} zIndex={2}>
        <Button
          as="a"
          href={VAULTS_FORM}
          target="_blank"
          size="md"
          rightIcon={
            <ChakraImage
              src="/icons/arrow-up-right.svg"
              alt="Up"
              width={5}
              height={5}
            />
          }
        >
          Contact Us
        </Button>
      </CardFooter>
      <Box zIndex={1}>
        <Lottie animationData={bg} loop={true} className="full-bg" />
      </Box>
    </Card>
  )
}
