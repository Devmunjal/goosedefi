import { ButtonMenu, ButtonMenuItem, Card, CardBody, Input, Text, CardHeader } from '@pancakeswap-libs/uikit';
import Page from 'components/layout/Page';
import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import Divider from 'views/Farms/components/Divider';



function Exchnage() {
    const { url, isExact } = useRouteMatch()
    return (
        <Page style={{ alignItems: "center" }}>
            <div style={{textAlign:"center", marginTop:"50px"}}>
                <ButtonMenu activeIndex={isExact ? 0 : 1} size="sm" variant="subtle">
                    <ButtonMenuItem as={Link} to="/exchange">
                        Swap
                </ButtonMenuItem>
                    <ButtonMenuItem as={Link} to="/exchange">
                        Liquidty
                </ButtonMenuItem>
                </ButtonMenu>
            </div>
            <div style={{textAlign:"center", width:"50%", margin:"auto"}}>
                <Card style={{marginTop:"50px"}}>
                    <CardHeader style={{textAlign:"left", background:"#2b1701"}}>
                        <Text>
                            Exchange
                        </Text>
                    </CardHeader>
                    <Divider style={{margin:"0"}} />
                    <CardBody>
                        <Input placeholder="0.0" />
                    </CardBody>
                </Card>
            </div>
        </Page>
    )

}

export default Exchnage;
