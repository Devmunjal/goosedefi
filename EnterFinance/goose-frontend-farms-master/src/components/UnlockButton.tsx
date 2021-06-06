import React from 'react'
import { Button, useWalletModal, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
     <Text style={{color:"#2A1605", fontSize:"1.5em"}}>
     {TranslateString(292, 'Unlock Wallet')}
     </Text>
    </Button>
  )
}

export default UnlockButton
