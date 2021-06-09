"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var uikit_1 = require("@pancakeswap-libs/uikit");
var bignumber_1 = require("bignumber.js/bignumber");
var styled_components_1 = require("styled-components");
var formatBalance_1 = require("utils/formatBalance");
var useTokenBalance_1 = require("hooks/useTokenBalance");
var useI18n_1 = require("hooks/useI18n");
var addressHelpers_1 = require("utils/addressHelpers");
var CardValue2_1 = require("./CardValue2");
var hooks_1 = require("../../../state/hooks");
var StyledCakeStats = styled_components_1["default"](uikit_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  margin-left: auto;\n  margin-right: auto;\n"])));
var Row = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"], ["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"])));
var CakeStats = function () {
    var TranslateString = useI18n_1["default"]();
    var totalSupply = useTokenBalance_1.useTotalSupply();
    var burnedBalance = useTokenBalance_1.useBurnedBalance(addressHelpers_1.getCakeAddress());
    var farms = hooks_1.useFarms();
    var eggPrice = hooks_1.usePriceCakeBusd();
    var circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new bignumber_1["default"](0);
    var cakeSupply = formatBalance_1.getBalanceNumber(circSupply);
    var marketCap = eggPrice.times(circSupply);
    var enterPerBlock = 0;
    if (farms && farms[0] && farms[0].enterPerBlock) {
        enterPerBlock = new bignumber_1["default"](farms[0].enterPerBlock).div(new bignumber_1["default"](10).pow(18)).toNumber();
    }
    return (react_1["default"].createElement(StyledCakeStats, null,
        react_1["default"].createElement(uikit_1.CardBody, null,
            react_1["default"].createElement(uikit_1.Heading, { style: { fontSize: "2em" }, mb: "24px" }, TranslateString(534, 'Egg Stats')),
            react_1["default"].createElement(Row, null,
                react_1["default"].createElement(uikit_1.Text, { fontSize: "14px" }, TranslateString(10005, 'Market Cap')),
                react_1["default"].createElement(CardValue2_1["default"], { fontSize: "14px", value: formatBalance_1.getBalanceNumber(marketCap), decimals: 0, prefix: "$" })),
            react_1["default"].createElement(Row, null,
                react_1["default"].createElement(uikit_1.Text, { fontSize: "14px" }, TranslateString(536, 'Total Minted')),
                totalSupply && react_1["default"].createElement(CardValue2_1["default"], { fontSize: "14px", value: formatBalance_1.getBalanceNumber(totalSupply), decimals: 0 })),
            react_1["default"].createElement(Row, null,
                react_1["default"].createElement(uikit_1.Text, { fontSize: "14px" }, TranslateString(538, 'Total Burned')),
                react_1["default"].createElement(CardValue2_1["default"], { fontSize: "14px", value: formatBalance_1.getBalanceNumber(burnedBalance), decimals: 0 })),
            react_1["default"].createElement(Row, null,
                react_1["default"].createElement(uikit_1.Text, { fontSize: "14px" }, TranslateString(10004, 'Circulating Supply')),
                cakeSupply && react_1["default"].createElement(CardValue2_1["default"], { fontSize: "14px", value: cakeSupply, decimals: 0 })),
            react_1["default"].createElement(Row, null,
                react_1["default"].createElement(uikit_1.Text, { fontSize: "14px" }, TranslateString(540, 'New EGG/block')),
                react_1["default"].createElement(uikit_1.Text, { bold: true, fontSize: "14px" }, enterPerBlock)))));
};
exports["default"] = CakeStats;
var templateObject_1, templateObject_2;
