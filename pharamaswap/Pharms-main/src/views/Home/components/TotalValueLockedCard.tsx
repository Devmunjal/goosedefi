import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, CardHeader } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 0 0px 12px 2px  ${({ theme }) => theme.colors.textDisabled}
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardHeader>
        <Heading style={{fontSize:"1.6em",  textAlign:"center"}} mb="20px" color="textSubtle">
           Total Value Locked
        </Heading>
      </CardHeader>
      <CardBody mt="10%">
        <div style={{textAlign:"center", verticalAlign:"middle"}}>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
          <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} />
          {/* </Heading> */}
          <Text color="textSubtle">{TranslateString(999, 'Across all Farms and Pools')}</Text>
        </div>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
