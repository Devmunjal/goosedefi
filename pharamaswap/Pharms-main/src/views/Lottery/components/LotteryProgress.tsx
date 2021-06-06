import React from 'react'
import styled from 'styled-components'
import { Text, Progress } from '@pancakeswap-libs/uikit'
import UnlockButton from 'components/UnlockButton'
import useI18n from 'hooks/useI18n'
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'
import { useCurrentTime } from 'hooks/useTimer'
import {
  getLotteryDrawTime,
  getLotteryDrawStep,
  getTicketSaleTime,
  getTicketSaleStep,
} from '../helpers/CountdownHelpers'

const ProgressWrapper = styled.div`
  display: block;
  width: 100%;
`

const TopTextWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const BottomTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color:${({theme}) => theme.colors.textSubtle}
`

const StyledPrimaryText = styled(Text)`
  margin-right: 16px;
`
const LotteryProgress = ({account}) => {
  const TranslateString = useI18n()
  const lotteryHasDrawn = useGetLotteryHasDrawn()
  const currentMillis = useCurrentTime()
  const timeUntilTicketSale = getTicketSaleTime(currentMillis)
  const timeUntilLotteryDraw = getLotteryDrawTime(currentMillis)

  return (
    <ProgressWrapper>
      <Progress primaryStep={getLotteryDrawStep(currentMillis)} secondaryStep={getTicketSaleStep()} showProgressBunny />
      <TopTextWrapper>
        <StyledPrimaryText fontSize="25px"  color="text">
          {lotteryHasDrawn ? timeUntilTicketSale : timeUntilLotteryDraw}
        </StyledPrimaryText>
        
      </TopTextWrapper>
      {lotteryHasDrawn && (
        <BottomTextWrapper>
          <Text fontSize="15px" bold color="textSubtle">
          {lotteryHasDrawn ? TranslateString(0, 'Until ticket sale') : TranslateString(0, 'Until lottery draw')}
        </Text>
          <Text color="textSubtle" style={{marginLeft:"10px"}}>
             {timeUntilLotteryDraw} {TranslateString(0, 'Until lottery draw')}
          </Text>
        </BottomTextWrapper>
      )}
      {!account && <UnlockButton style={{width:"80%", display:"auto", marginTop:"30px"}} />}
    </ProgressWrapper>
  )
}

export default LotteryProgress
