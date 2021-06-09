import React from 'react'
import { Button, useWalletModal, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <Button style={{
      backgroundImage: "linear-gradient(to right, #5a9d49, #90d480, #76bda5)", padding: "25px 25px"
    }} onClick={onPresentConnectModal} {...props}>
      <Text color="white" style={{ fontSize: "1.5em" }}>
        {TranslateString(292, 'Unlock Wallet')}
      </Text>
    </Button>
  )
}

export default UnlockButton
