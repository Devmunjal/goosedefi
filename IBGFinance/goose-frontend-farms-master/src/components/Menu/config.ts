import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'HOME',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'TRADE',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/ETH/0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0',
      },
    ],
  },
  {
    label: 'FARMING',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'STAKING',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'INFO',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: '',
  //     },
      // {
      //   label: 'CoinGecko',
      //   href: '',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: '',
      // },
      // {
      //   label: 'AstroTools',
      //   href: '',
  //     // },
  //   ],
  // },
  {
    label: 'MORE',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Github',
      //   href: '',
      // },
      // {
      //   label: 'Docs',
      //   href: 'https://goosedefi.gitbook.io/goose-finance/',
      // },
      {
        label: 'Blog',
        href: '',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
