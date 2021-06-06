import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Link, Image } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const LayoutWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  background:${({ theme }) => theme.colors.card}
`
const Hero = styled.div`
  width:100%;
  background:${({ theme }) => theme.colors.card};
  padding:50px;
`

const StyledHeading = styled(Heading)`
  margin: 16px 0;
`

const StyledImage = styled(Image)`
  align-self: center;
  margin-bottom:50px;
`

const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
  border:2px solid ${({theme}) => theme.colors.text};
  padding:10px 30px;
  border-radius:10px;
  max-width:300px;
  width:100%;
  text-align:center;
  justify-content:center;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <Hero>
      <LayoutWrapper>
        <StyledImage src="/images/asta.png" alt="lottery bunny" width={163} height={190} />
        <br />
        <StyledHeading size="lg" as="h3" color="textColor" style={{ textAlign: "center" }}>
          {TranslateString(999, 'How it works')}
        </StyledHeading>
        <Text fontSize="16px" color="textSubtle" style={{ textAlign: "center" }}>
          {TranslateString(
            999,
            'Spend PHARM to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!',
          )}
        </Text>
        <StyledLink href="https://docs.pharmswap.finance/lottery-1">Read more</StyledLink>
      </LayoutWrapper>
    </Hero>
  )
}

export default HowItWorks
