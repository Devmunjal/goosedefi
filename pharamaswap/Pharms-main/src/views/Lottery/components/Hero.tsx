import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'
import LotteryProgress from './LotteryProgress'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 24px;
  font-size:2em;
`

const Blurb = styled(Text)`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 20px;
  font-weight: 600;
  font-size:1em;
`

const StyledHero = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding-bottom: 40px;
  padding-top: 40px;
  border-radius:20px;
  box-shadow:0 0 12px 2px ${({ theme }) => theme.colors.text};
  text-align:center;
  background:url('/images/lotteryRight.png'), url('/images/lotteryLeft.png');
  background-position:right center, left center;
  background-repeat:no-repeat;
  background-size:20%;
  margin-bottom:20px;
`

const StyledContainer = styled(Container)`
  display: block;

  flex-direction: row;
  margin:auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    width:80%;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    width:60%;
  }
`

const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 0;
  text-align:center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 0;
  margin-top: 50px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
    
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    
  }
`

const Hero = ({account}) => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <StyledContainer>
        <LeftWrapper>
          <Title>{TranslateString(999, 'The PHARM Lottery')}</Title>
          <Blurb>{TranslateString(999, 'Buy tickets with PHARM')}</Blurb>
          <Blurb>{TranslateString(999, 'Win if 2, 3, or 4 of your ticket numbers match!')}</Blurb>
        </LeftWrapper>
        <RightWrapper style={{ marginTop: "30px" }}>
          <LotteryProgress account={account} />
        </RightWrapper>
      </StyledContainer>
    </StyledHero>
  )
}

export default Hero
