import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Heading, Text, BaseLayout, ButtonMenu, ButtonMenuItem, Button, Card, CardHeader, CardBody, Flex } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import UnlockButton from 'components/UnlockButton'
import Divider from 'views/Pools/components/Divider'
import FlexLayout from 'components/layout/Flex'





const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`


const Hero = styled.div`
  align-items: center;
  background-image: url('/images/ss.png'), url('/images/image20.png');
  background-position: left center, right center;
  height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 22px;
  box-shadow:0 0 12px 1px ${({ theme }) => theme.colors.text};
  background-repeat: no-repeat;
  padding:10px;
  background-size:15%;



  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/ss.png'), url('/images/image20.png');
    background-position: left center, right center;
    padding-top: 0;
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: 22px;
    box-shadow:0 0 12px 1px ${({ theme }) => theme.colors.text};
    padding:10px;
    background-repeat: no-repeat;
    background-size:15%;
    height: 350px;
  }
`


const Box = styled.div`

border-radius:15px;
background:${({ theme }) => theme.colors.card};
box-shadow:0 0 12px 2px ${({ theme }) => theme.colors.textSubtle};
min-width:150px;
padding:5%;
vertical-align:middle;
text-align:left;
`;


const Takepart = styled.div`

background:${({ theme }) => theme.colors.textDisabled};
text-align:center;
background-image:url('/images/lightCount.png');
background-repeat:no-repeat;
background-size:100px;
background-position:center 64%;
${({ theme }) => theme.mediaQueries.lg} {
 padding:2%;
 background-image:url('/images/lightCount.png');
background-repeat:no-repeat;
background-size:82px;
background-position:center 64%;
 background-size:82px;
}
`;


const Salelayout = styled.div`

display:block;
width:80%;
margin:auto;
background:${({ theme }) => theme.colors.card};
box-shadow:0 0 12px 2px ${({ theme }) => theme.colors.textDisabled};
padding:20px;
margin-bottom:20px; 
align-items:center;
text-align:center;

`;

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
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading style={{ fontSize: "2em" }} mb="24px" color="textColor">
          LaunchPad
        </Heading>
        <Text style={{ fontSize: "1.3em" }} color="textSubtle">Participate in new project launches with our token sale model</Text>
        {/* <Button >HELLO</Button> */}
        <div style={{ marginTop: "20px", maxWidth: "300px" }}>
          <ButtonMenu activeIndex={0} variant="primary" >
            <ButtonMenuItem >
              {TranslateString(698, 'Active')}
            </ButtonMenuItem>
            <ButtonMenuItem >
              {TranslateString(700, 'Inactive')}
            </ButtonMenuItem>
          </ButtonMenu>
        </div>
      </Hero>
      <Salelayout style={{borderRadius:"20px 20px 0px 0px"}}>
        <img src="/images/egg/LogoTextNewWhite.png" alt="logofor" style={{ display: "block", margin: "auto", width: "250px" }} />
        <Button variant="secondary" mt="20px" style={{ width: "250px" }}>
          Show
        </Button>

      </Salelayout>
      <div style={{ width: "80%", margin: "auto" }}>
        <FlexLayout>

          <Card>
            
            <CardHeader>
              <Text color="textColor" fontSize="25px">
                Standard Sale
              </Text>
            </CardHeader>
            <CardBody>
              <img src="/images/cd copy.png" alt="question" style={{ display: "block", margin: "auto" }} />
              <UnlockButton size="sm" mt="30px" fullWidth />
              <table>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Max. Lp Token Entry
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      0.39
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Total Commited
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      ~$3,945,632.68(840.17%)
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Fund To Raise
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      $750,000
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Pharm To Burn
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      $375,000
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Price Per Hzn
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      $0.39
                    </Text>
                  </td>
                </tr>
              </table>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Text color="textColor" fontSize="25px">
                Unlimited Sale
              </Text>
            </CardHeader>
            <CardBody>
              <img src="/images/cd copy.png" alt="question" style={{ display: "block", margin: "auto" }} />
              <UnlockButton size="sm" mt="30px" fullWidth />
              <table>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Max. Lp Token Entry
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      0.39
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Total Commited
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      ~$3,945,632.68(840.17%)
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Fund To Raise
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      $750,000
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Pharm To Burn
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      $375,000
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%" }}>
                    <Text color="textSubtle" style={{ fontSize: "0.9em" }}>
                      Price Per Hzn
                    </Text>
                  </td>
                  <td style={{ width: "50%" }} >
                    <Text color="textColor" style={{ textAlign: "right", fontSize: "0.9em" }}>
                      $0.39
                    </Text>
                  </td>
                </tr>
              </table>
            </CardBody>
          </Card>

        </FlexLayout>
        <div style={{margin:"20px"}}>
          <Text color="textColor">
            Achievement :
          </Text>
          <Text color="textSubtle" fontSize="30px">
              Launch Pad: Pharmswap Protocol (Pharm) 100
          </Text>
          <Text color="textSubtle">
              Commit ~0.06253211183023942 Lp in Total To Earn!
          </Text>
          <a href="https://www.pancakeswap.finance">
            <Text>
              Learn More About Pharmswap Protocol (Pharm)
            </Text>
          </a>
        </div>
      </div>

      <Salelayout style={{borderRadius:"0 0 20px 20px"}} >
        <Button variant="secondary" style={{ width: "250px" }}>
          Hide
        </Button>

      </Salelayout>
      <Takepart>
        <Text color="text" style={{ fontSize: "2.2em", marginBottom: "20px" }}>
          How To Take Part
        </Text>
        {/* <img src="/images/darkCount.png" alt="count" style={{ position: "absolute", display: "block", margin: "auto", marginLeft: `${"45%"}`, marginTop: "44px", height:"25%" }} /> */}

        <table style={{ width: "100%" }}>
          <tr style={{ width: "100%", height: "200px" }}>
            <td style={{ width: "33%" }} />
            <td />
            <td style={{ width: "33%", verticalAlign: "middle", paddingLeft: "2%" }}>
              <Box>
                <Text color="textColor" mb="10px">
                  Connect Bsc Wallet
                </Text>
                <Text color="textSubtle">
                  you&apos;ll need a Binance smart chain wallet to take part
                </Text>
                <UnlockButton size="sm" style={{ marginTop: "15px", minWidth: "128px", fontSize: "0.9em" }} />
              </Box>
            </td>
          </tr>
          <tr style={{ width: "100%", height: "200px" }}>
            <td style={{ width: "33%", verticalAlign: "middle", paddingRight: "2%" }}>
              <Box>
                <Text color="textColor" mb="10px">
                  Get BNB
                </Text>
                <Text color="textSubtle">
                  BNB is needed to take part in the token sale, if you do not have BNB you can purchase from the exchange.
                </Text>
                <Button size="sm" style={{ marginTop: "15px", minWidth: "128px", fontSize: "0.9em" }}>Purchase BNB</Button>
              </Box>
            </td>
            <td />
            <td style={{ width: "33%" }} />

          </tr>
          <tr style={{ width: "100%", height: "200px" }}>
            <td style={{ width: "33%" }} />
            <td />
            <td style={{ width: "33%", verticalAlign: "middle", paddingLeft: "2%" }}>
              <Box>
                <Text color="textColor" mb="10px">
                  Deposit BNB
                </Text>
                <Text color="textSubtle">
                  Deposit BNB above only during a live sale. This sale segment we will only accept BNB please don&apos;t not commit any other token
                </Text>
              </Box>
            </td>
          </tr>
          <tr style={{ width: "100%", height: "200px" }}>
            <td style={{ width: "33%", verticalAlign: "middle", paddingRight: "2%" }}>
              <Box>
                <Text color="textColor" mb="10px">
                  Claim Your Tokens
                </Text>
                <Text color="textSubtle">
                  After the sale finishes, you can claim your tokens
                </Text>
              </Box>
            </td>
            <td />
            <td style={{ width: "33%" }} />

          </tr>
        </table>
      </Takepart>
      <Card style={{ marginTop: "50px" }}>
        <CardHeader>
          <Text color="textColor" style={{ fontSize: "2em", textAlign: "center" }}>
            Details
          </Text>
        </CardHeader>
        {/* <Divider /> */}
        <CardBody>
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <Flex mb="15px" style={{ width: "100%" }}>
              <Text color="textSubtle" style={{ fontSize: "1.3em", width: "70%" }}>
                Token Sale
              </Text>
              <div style={{ clear: "left", width: "30%" }}><Button variant="secondary" size="sm" style={{ float: "right" }}>Show</Button></div>
            </Flex>
            <Text color="textSubtle" style={{ width: "80%" }}>
              Token sale will last 30days or until the hardcap is reached $1,000,000 There is a minimum 0. 1 BNB deposit and no maximum. To participate in this sale deposit only BNB. Tokens will be distributed after the sale is over.
            </Text>
          </div>
          <Divider />
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <Flex mb="15px" style={{ width: "100%" }}>
              <Text color="textSubtle" style={{ fontSize: "1.3em", width: "70%" }}>
                What will the BNB be used for?
              </Text>
              <div style={{ clear: "left", width: "30%" }}><Button variant="secondary" size="sm" style={{ float: "right" }}>Show</Button></div>
            </Flex>
            <Text color="textSubtle" style={{ width: "80%" }}>
              The BNB collected from the sale will be used for liquidty and further development 90% liquidity 10% deposit
            </Text>
          </div>
          <Divider />
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <Flex mb="15px" style={{ width: "100%" }}>
              <Text color="textSubtle" style={{ fontSize: "1.3em", width: "70%" }}>
                Who can take part
              </Text>
              <div style={{ clear: "left", width: "30%" }}><Button variant="secondary" size="sm" style={{ float: "right" }}>Show</Button></div>
            </Flex>
            <Text color="textSubtle" style={{ width: "80%" }}>
              As this is a open offerings anyone with a binance smart chain wallet can participate during the live sale
            </Text>
          </div>
        </CardBody>
      </Card>

    </Page>
  )
}

export default Home
