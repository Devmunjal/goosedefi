import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Ticket } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:10px;
  background:${({theme}) => theme.colors.textDisabled};
  width:100%;
  margin:20px;
  border-radius:20px;
`

const StyledHeading = styled(Heading)`
  margin: 16px 0;
  color:${({theme}) => theme.colors.textSubtle }
`

const IconWrapper = styled.div`
  svg {
    width: 80px;
    height: 80px;
  }
`

const UnlockWalletCard = () => {
  const TranslateString = useI18n()

  return (
    <Card isActive style={{ boxShadow: 'none', height: '310px', display: 'flex', justifyContent: 'center' }}>
      <StyledCardBody>
        <IconWrapper>
          {/* <Ticket /> */}
          <img src="/images/image90.png" alt="ticket" style={{ height: '100px' }} />
        </IconWrapper>
        <StyledHeading size="md" style={{ marginTop: '30px', marginBottom: '30px' }}>
          {TranslateString(999, 'Unlock wallet to access lottery')}
        </StyledHeading>
        <UnlockButton fullWidth />
      </StyledCardBody>
    </Card>
  )
}

export default UnlockWalletCard
