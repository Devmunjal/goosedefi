import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Arcade = lazy(() => import('./views/Arcade'))
const Gallery = lazy(() => import('./views/Gallery'))

// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  let background = "/images/page1.png"

  function changeBg() {
    console.log(window.location.pathname)
    if (window.location.pathname === "/" || window.location.pathname === "/arcade"  || window.location.pathname === "/gallery" ) {
      background = "/images/page1.png";
    }
    else if (window.location.pathname === "/farms") {
      background = "/images/page2.jpg";
    }
    else if (window.location.pathname === "/nests") {
      background = "/images/page3.jpg";
    }
  }

  return (
    changeBg(),
    <div>
      <img src={background} alt="bg1"  style={{ position: "fixed", left: "0",width:"100vw", height:"100vh" }} />
      <Router>
        <ResetCSS />
        <GlobalStyle />
        <Menu>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/farms">
                <Farms />
              </Route>
              <Route path="/nests">
                <Farms tokenMode />
              </Route>
              <Route path="/arcade">
                <Arcade />
              </Route>
              <Route path="/gallery">
                <Gallery />
              </Route>
              {/* <Route path="/pools"> */}
              {/*  <Pools /> */}
              {/* </Route> */}
              {/* <Route path="/lottery"> */}
              {/*  <Lottery /> */}
              {/* </Route> */}
              {/* <Route path="/ifo"> */}
              {/*  <Ifos /> */}
              {/* </Route> */}
              {/* <Route path="/nft"> */}
              {/*  <Nft /> */}
              {/* </Route> */}
              {/* Redirect */}
              {/* <Route path="/staking"> */}
              {/*  <Redirect to="/pools" /> */}
              {/* </Route> */}
              {/* <Route path="/syrup"> */}
              {/*  <Redirect to="/pools" /> */}
              {/* </Route> */}
              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Menu>
        <NftGlobalNotification />
      </Router>
    </div>
  )
}

export default React.memo(App)
