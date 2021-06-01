import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'GOLD',
    lpAddresses: {
      97: '',
      56: '0xFA41752dD863e09494Ac491639747De66adC6512',
    },
    tokenSymbol: 'GOLD',
    tokenAddresses: {
      97: '',
      56: '0xFA41752dD863e09494Ac491639747De66adC6512',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isTokenOnly:true,
  },{
    pid: 0,
    risk: 5,
    lpSymbol: 'RETRO',
    lpAddresses: {
      97: '',
      56: '0x9385eaaccb0789829354ed67d5b73d3f0816198d',
    },
    tokenSymbol: 'GOLD',
    tokenAddresses: {
      97: '',
      56: '0xFA41752dD863e09494Ac491639747De66adC6512',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isTokenOnly:true,
  },{
    pid: 2,
    risk: 5,
    lpSymbol: 'GOLD-BNB',
    lpAddresses: {
      97: '',
      56: '0x5bc62934450ed677Ba5F7A64fAc73D447E4005a4',
    },
    tokenSymbol: 'GOLD',
    tokenAddresses: {
      97: '',
      56: '0xFA41752dD863e09494Ac491639747De66adC6512',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'RETRO-BNB',
    lpAddresses: {
      97: '',
      56: '0xF4018b264BB7B2FEFcb486298596537695774b22',
    },
    tokenSymbol: 'GOLD',
    tokenAddresses: {
      97: '',
      56: '0xFA41752dD863e09494Ac491639747De66adC6512',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.busd,

  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'GOLD-BUSD',
    lpAddresses: {
      97: '',
      56: '0x3ee29348930024EA3dA72e30E04AF3cDc44057f6',
    },
    tokenSymbol: 'GOLD',
    tokenAddresses: {
      97: '',
      56: '0xFA41752dD863e09494Ac491639747De66adC6512',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,

  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'RETRO-BUSD',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'GOLD',
    tokenAddresses: {
      97: '',
      56: '0xFA41752dD863e09494Ac491639747De66adC6512',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,

  },
  
  
]

export default farms
