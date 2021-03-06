import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading, Toggle } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'

export interface FarmsProps {
  tokenMode?: boolean
}


const Hero = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 20px;
  box-shadow:0 0 12px 1px ${({ theme }) => theme.colors.text};
  margin:auto;
  padding:5% 3%;
  background-image:url('/images/hgg.png');
  background-repeat:no-repeat;
  background-position-x:90%;
  background-position-y:38%;
  background-size:15%;
`


const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)
  const [toggleCard, setToggle] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.pharmPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear)
        console.log(apy.toNumber(), 'apy before')
        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        console.log(
          cakeRewardPerBlock.toNumber(),
          cakeRewardPerYear.toNumber(),
          apy.toNumber(),
          totalValue.toNumber(),
          'cakeRewardPerBlock,cakeRewardPerYear,apy,totalValue',
        )
        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
          toggleCard={toggleCard}
        />
      ))
    },
    [bnbPrice, account, cakePrice, ethereum, toggleCard],
  )

  const ToggleView = (status: boolean) => {
    setToggle(status)
  }

  return (
    <Page>
      <Hero style={{ textAlign: "left", alignItems: "start"}}>
        <Heading as="h1" color="textColor" mb="20px" style={{ textAlign: 'left', fontSize: `${window.screen.width < 900 ? "1.3em" : "2em"}` }}>
          {tokenMode
            ? TranslateString(10002, 'Stake tokens to earn EGG')
            : TranslateString(320, 'Stake LP tokens to earn EGG')}
        </Heading>
        <Heading as="h2" color="textSubtle" mb="50px" style={{ textAlign: 'left', fontSize: `${window.screen.width < 900 ? "0.7em" : "1.2em"}` }}>
          {TranslateString(10000, 'Deposit Fee will be used to buyback EGG')}
        </Heading>

        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start' }}>
          <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
        </div>
      </Hero>

      <div style={{ marginTop: "50px" }}>

        <FlexLayout>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      {/* <Image src="/images/egg/8.png" alt="illustration" width={1352} height={587} responsive /> */}
    </Page>
  )
}

export default Farms
