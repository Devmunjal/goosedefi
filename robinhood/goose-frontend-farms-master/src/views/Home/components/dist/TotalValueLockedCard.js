"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var useI18n_1 = require("hooks/useI18n");
var hooks_1 = require("../../../state/hooks");
var CardValue2_1 = require("./CardValue2");
var StyledTotalValueLockedCard = styled_components_1["default"](uikit_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  background-image:url('/images/totalvalue.png');\n  background-repeat:no-repeat;\n  background-position: 95% center;\n  background-size:120px;\n"], ["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  background-image:url('/images/totalvalue.png');\n  background-repeat:no-repeat;\n  background-position: 95% center;\n  background-size:120px;\n"])));
var TotalValueLockedCard = function () {
    var TranslateString = useI18n_1["default"]();
    // const data = useGetStats()
    var totalValue = hooks_1.useTotalValue();
    // const tvl = totalValue.toFixed(2);
    return (react_1["default"].createElement(StyledTotalValueLockedCard, null,
        react_1["default"].createElement(uikit_1.CardBody, null,
            react_1["default"].createElement(uikit_1.Heading, { size: "lg", mb: "24px" }, "TOTAL VALUE LOCKED (TVL)"),
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(CardValue2_1["default"], { fontSize: "4em", value: totalValue.toNumber(), prefix: "$", decimals: 2 }),
                react_1["default"].createElement(uikit_1.Text, { color: "text" }, "ACROSS ALL FARMS AND POOLS")))));
};
exports["default"] = TotalValueLockedCard;
var templateObject_1;
