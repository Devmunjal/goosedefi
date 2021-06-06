import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text, Toggle } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const FarmTabButtons = ({ stakedOnly, setStakedOnly }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <div>
        <Text color="textSubtle" style={{fontSize:"12px"}}> {TranslateString(699, 'Staked only')}</Text>
        <ToggleWrapper>
          <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
        </ToggleWrapper>
      </div>
      <div style={{marginTop:"18px"}}>
      <ButtonMenu activeIndex={isExact ? 0 : 1} size="sm" variant="primary">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {TranslateString(698, 'Active')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {TranslateString(700, 'Inactive')}
        </ButtonMenuItem>
      </ButtonMenu>
      </div>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background:${({theme}) => theme.colors.textDisabled};
  padding:10px;
  border-radius:10px;
  max-width:400px;
  width:100%

  `

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`
