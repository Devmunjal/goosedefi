"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var bignumber_js_1 = require("bignumber.js");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var useI18n_1 = require("hooks/useI18n");
var ExpandableSectionButton_1 = require("components/ExpandableSectionButton");
var types_1 = require("config/constants/types");
var DetailsSection_1 = require("./DetailsSection");
var CardHeading_1 = require("./CardHeading");
var CardActionsContainer_1 = require("./CardActionsContainer");
var ApyButton_1 = require("./ApyButton");
var RainbowLight = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"], ["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"])));
var StyledCardAccent = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: ", " 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"], ["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: ", " 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])), RainbowLight);
var FCard = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-self: baseline;\n  background:#000000c4;\n  // background: ", ";\n  border-radius: 20px;\n  // box-shadow: 0 0 12px 2px ;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"], ["\n  align-self: baseline;\n  background:#000000c4;\n  // background: ", ";\n  border-radius: 20px;\n  // box-shadow: 0 0 12px 2px ;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])), function (props) { return props.theme.card.background; });
var Divider = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
});
var ExpandingWrapper = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: ", ";\n  overflow: hidden;\n"], ["\n  height: ", ";\n  overflow: hidden;\n"])), function (props) { return (props.expanded ? '100%' : '0px'); });
var FarmCard = function (_a) {
    var farm = _a.farm, removed = _a.removed, cakePrice = _a.cakePrice, bnbPrice = _a.bnbPrice, ethereum = _a.ethereum, account = _a.account;
    var TranslateString = useI18n_1["default"]();
    var _b = react_1.useState(false), showExpandableSection = _b[0], setShowExpandableSection = _b[1];
    // const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
    // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
    // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
    // const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()
    var farmImage = farm.isTokenOnly ? farm.tokenSymbol.toLowerCase() : "" + farm.lpSymbol.toLowerCase();
    var totalValue = react_1.useMemo(function () {
        if (!farm.lpTotalInQuoteToken) {
            return null;
        }
        if (farm.quoteTokenSymbol === types_1.QuoteToken.BNB) {
            return bnbPrice.times(farm.lpTotalInQuoteToken);
        }
        if (farm.quoteTokenSymbol === types_1.QuoteToken.CAKE) {
            return cakePrice.times(farm.lpTotalInQuoteToken);
        }
        return farm.lpTotalInQuoteToken;
    }, [bnbPrice, cakePrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol]);
    var totalValueFormated = totalValue
        ? "$" + Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })
        : '-';
    var lpLabel = farm.lpSymbol;
    var earnLabel = 'RBH';
    var farmAPY = farm.apy && farm.apy.times(new bignumber_js_1["default"](100)).toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    var quoteTokenAdresses = farm.quoteTokenAdresses, quoteTokenSymbol = farm.quoteTokenSymbol, tokenAddresses = farm.tokenAddresses, risk = farm.risk;
    return (react_1["default"].createElement(FCard, null,
        farm.tokenSymbol === 'ENTER' && react_1["default"].createElement(StyledCardAccent, null),
        react_1["default"].createElement(CardHeading_1["default"], { lpLabel: lpLabel, multiplier: farm.multiplier, risk: risk, depositFee: farm.depositFeeBP, farmImage: farmImage, tokenSymbol: farm.tokenSymbol }),
        !removed && (react_1["default"].createElement(uikit_1.Flex, { justifyContent: 'space-between', alignItems: 'center' },
            react_1["default"].createElement(uikit_1.Text, null,
                TranslateString(352, 'APR'),
                ":"),
            react_1["default"].createElement(uikit_1.Text, { bold: true, style: { display: 'flex', alignItems: 'center' } }, farm.apy ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(ApyButton_1["default"], { lpLabel: lpLabel, quoteTokenAdresses: quoteTokenAdresses, quoteTokenSymbol: quoteTokenSymbol, tokenAddresses: tokenAddresses, cakePrice: cakePrice, apy: farm.apy }),
                farmAPY,
                "%")) : (react_1["default"].createElement(uikit_1.Skeleton, { height: 24, width: 80 }))))),
        react_1["default"].createElement(uikit_1.Flex, { justifyContent: 'space-between' },
            react_1["default"].createElement(uikit_1.Text, null,
                TranslateString(318, 'Earn'),
                ":"),
            react_1["default"].createElement(uikit_1.Text, { bold: true }, earnLabel)),
        react_1["default"].createElement(uikit_1.Flex, { justifyContent: 'space-between' },
            react_1["default"].createElement(uikit_1.Text, { style: { fontSize: '24px' } },
                TranslateString(10001, 'Deposit Fee'),
                ":"),
            react_1["default"].createElement(uikit_1.Text, { bold: true, style: { fontSize: '24px' } },
                (farm.depositFeeBP / 100),
                "%")),
        react_1["default"].createElement(CardActionsContainer_1["default"], { farm: farm, ethereum: ethereum, account: account }),
        react_1["default"].createElement(Divider, null),
        react_1["default"].createElement(ExpandableSectionButton_1["default"], { onClick: function () { return setShowExpandableSection(!showExpandableSection); }, expanded: showExpandableSection }),
        react_1["default"].createElement(ExpandingWrapper, { expanded: showExpandableSection },
            react_1["default"].createElement(DetailsSection_1["default"], { removed: removed, isTokenOnly: farm.isTokenOnly, bscScanAddress: farm.isTokenOnly ?
                    "https://bscscan.com/token/" + farm.tokenAddresses[process.env.REACT_APP_CHAIN_ID]
                    :
                        "https://bscscan.com/token/" + farm.lpAddresses[process.env.REACT_APP_CHAIN_ID], totalValueFormated: totalValueFormated, lpLabel: lpLabel, quoteTokenAdresses: quoteTokenAdresses, quoteTokenSymbol: quoteTokenSymbol, tokenAddresses: tokenAddresses }))));
};
exports["default"] = FarmCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
