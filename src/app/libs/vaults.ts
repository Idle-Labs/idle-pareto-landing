import { compare } from './crypto'

// Models

interface Vault {
  name: string
  description: string
  logo: string
  code: string
  tvl: string
  redemptions: string
  app: string
  cardVariant: string
  type: 'credit' | 'earn'
  underlying: string
  loanType: string
  primaryColor: string
  yieldType?: string
  yield?: string
  curator?: string
  curatorLink?: string
  codes?: string[]
}

// Constants

export const VAULTS_APP = 'https://credit.idle.finance'
export const VAULTS_FORM = 'https://tally.so/r/woVrxx'
export const VAULT_CODE_LENGTH = 6
export const VAULTS: Vault[] = [
  {
    logo: '/logos/fasanara.svg',
    name: 'Basis Trade',
    description:
      'Variable-rate loan channeling funds into delta-neutral yield strategies overperforming the BTC funding rate.',
    code: 'FAS_USDC',
    tvl: '$6.2m',
    yieldType: '7-day Yield',
    yield: '26.00%',
    redemptions: 'Weekly',
    app: '//credit.idle.finance',
    type: 'credit',
    cardVariant: 'headerGreenGradient',
    underlying: 'USDC',
    loanType: 'Variable rate',
    primaryColor: 'greenDark',
  },
  {
    logo: '/logos/bastion.svg',
    name: 'Derivatives and Market Making',
    description:
      'Fixed rate loan channeling funds into derivatives trading and market-making strategies.',
    code: 'BAS_USDT',
    tvl: '$5m',
    yieldType: '30-day Yield',
    yield: '20.00%',
    redemptions: 'Monthly',
    app: '//credit.idle.finance',
    type: 'credit',
    cardVariant: 'headerBlueGradient',
    underlying: 'USDT',
    loanType: 'Fixed rate',
    primaryColor: 'blueLight',
  },
  {
    logo: '/logos/falconX.svg',
    name: 'Prime Brokerage',
    description:
      'Fixed rate loan channeling funds into prime brokerage activities.',
    code: 'FAL_USDC',
    tvl: '$15m',
    redemptions: 'Monthly',
    app: '//credit.idle.finance',
    type: 'credit',
    cardVariant: 'headerGrayGradient',
    underlying: 'USDT',
    loanType: 'Fixed rate',
    primaryColor: 'black',
    curator: 'M11 Credit',
    curatorLink: 'https://www.m11credit.com/',
  },
]
export const VAULTS_ADVANTAGES = [
  {
    icon: '/icons/tax.png',
    title: 'Lower cost of capital',
    description:
      'A decentralized infrastructure that compresses costs of traditional off-chain securitization and uses open-source services to reduce the intermediary costs and complexity of TradFi.',
  },
  {
    icon: '/icons/bill.png',
    title: 'End-to-end transparency',
    description:
      'End-to-end transparency as the entire capital structure, securitization, and servicing of debt facilities is brought onchain — multi-tranching, NAV, credit tokenization, securitization, reporting, and more.',
  },
  {
    icon: '/icons/money-bag.png',
    title: 'Built for DeFi',
    description:
      'Designed from the ground-up by a DeFi-native team to work seamlessly with DeFi protocols in a compliant way. Tokens can be used as collateral, in settlement transactions, or for on-chain finance.',
  },
  {
    icon: '/icons/cash-in-hand.png',
    title: 'Flexible ownership',
    description:
      'We designed Credit Vaults to easily integrate with your existing workflows and custody solutions, whether you manage a crypto native fund, a DAO, or a traditional fund.',
  },
  {
    icon: '/icons/certificate.png',
    title: 'Clear regulatory structure',
    description:
      'Credit Vaults operate within a simple regulatory framework so you can focus on utility and yield. Assets are segregated by established providers, and available to Qualified Investors in supported jurisdictions.',
  },
]

export const VAULTS_FEATURES = [
  {
    title: 'Transparent and On-chain Access',
    description:
      'Access real-time transparency and direct interaction between lenders and borrowers, enabling data access without intermediaries.',
    pareto: true,
    others: true,
  },
  {
    title: 'Automated Smart Contract Settlement',
    description:
      'Streamline loan terms, repayments, and liquidations through smart contracts, reducing manual effort and enhancing operational efficiency.',
    pareto: true,
    others: true,
  },
  {
    title: 'Customizable Loan Parameters',
    description:
      'Adapt loan structures to match individual risk preferences and market conditions, with tailored risk management settings and interest rate options.',
    pareto: true,
    others: false,
  },
  {
    title: 'Prime Brokerage Lending Model',
    description:
      'Reduce counterparty risk with a brokerage-style model, combining capital efficiency with a secure, over-collateralized framework.',
    pareto: true,
    others: false,
  },
  {
    title: 'Curator-Driven Risk and Liquidity Monitoring',
    description:
      'Benefit from expert-led, real-time monitoring of risk and liquidity parameters for optimized interest rates, collateral, and liquidity.',
    pareto: true,
    others: false,
  },
]

/**
 * Get vault url by code
 * @param code - the early access code
 * @param key - the secret key
 * @returns the url to redirect the user
 */
export function getVaultUrl(code: string, key: string): string | undefined {
  const vault = VAULTS.find((v) => v.codes?.find((c) => compare(code, c, key)))
  return vault ? parseVaultUrl(vault, code) : undefined
}

/**
 * Parse vault URL
 * @param vault - the vault data
 * @param hash - the hash
 * @returns the url of the vault
 */
export function parseVaultUrl(vault: Vault, code: string): string {
  return `${vault.app}/#/${vault.type}?_authCode=${btoa(code)}`
}
