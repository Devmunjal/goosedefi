import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: left;
  background-image: url('/images/bitmap.png');
  background-repeat: no-repeat;
  background-position: right center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 22px;
  box-shadow:0 0 12px 1px ${({ theme }) => theme.colors.text};
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  text-align: left;
  height: 200px;
  padding-left:10px;
  background-size:30%;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/bitmap.png');
    background-position:  right center;
    background-position-x:  95%;
    background-position-y:  50%;
    height: 250px;
    padding-top: 0;
    text-align:left;
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: 22px;
    box-shadow:0 0 12px 1px ${({ theme }) => theme.colors.text};
    padding-left:50px;
    background-size:150px;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;
  background-color: #d4d4d40a;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 3;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" style={{fontSize:"2rem"}} mb="24px" color="textColor">
          {TranslateString(576, 'Goose Finance')}
        </Heading>
        <Text  style={{fontSize:`${window.screen.width < 900 ? "0.7em" :"1rem"}`}} color="textSubtle">{TranslateString(578, 'Top 3 best DEFI app on Binance Smart Chain.')}</Text>
        {/* <Button >HELLO</Button> */}
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
