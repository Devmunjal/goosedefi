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
var Page_1 = require("components/layout/Page");
var FarmStakingCard_1 = require("./components/FarmStakingCard");
var CakeStats_1 = require("./components/CakeStats");
var TotalValueLockedCard_1 = require("./components/TotalValueLockedCard");
var TwitterCard_1 = require("./components/TwitterCard");
var Hero = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-image:url('/images/logo.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  height:250px;\n  margin-bottom: 32px;\n  text-align: center;\n  background-size:100%;\n  // background:#FFFFFFC5;\n\n  ", " {\n    background-position: center,right;\n    background-image:url('/images/logo.png');\n    background-repeat: no-repeat;\n    width:60%;\n    height:250px;\n    padding-top: 0;\n  }\n"], ["\n  align-items: center;\n  background-image:url('/images/logo.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  height:250px;\n  margin-bottom: 32px;\n  text-align: center;\n  background-size:100%;\n  // background:#FFFFFFC5;\n\n  ", " {\n    background-position: center,right;\n    background-image:url('/images/logo.png');\n    background-repeat: no-repeat;\n    width:60%;\n    height:250px;\n    padding-top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Cards = styled_components_1["default"](uikit_1.BaseLayout)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"], ["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Home = function () {
    var TranslateString = useI18n_1["default"]();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Page_1["default"], null,
            react_1["default"].createElement(Hero, null),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Cards, null,
                    react_1["default"].createElement(FarmStakingCard_1["default"], null),
                    react_1["default"].createElement(TwitterCard_1["default"], null),
                    react_1["default"].createElement(CakeStats_1["default"], null),
                    react_1["default"].createElement(TotalValueLockedCard_1["default"], null))))));
};
exports["default"] = Home;
var templateObject_1, templateObject_2;
