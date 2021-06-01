import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'RA',
    lpAddresses: {
      97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
      56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
    },
    tokenSymbol: 'RA',
    tokenAddresses: {
      97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
      56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
