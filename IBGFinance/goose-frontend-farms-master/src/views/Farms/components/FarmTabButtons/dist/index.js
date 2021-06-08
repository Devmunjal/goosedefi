"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var uikit_1 = require("@pancakeswap-libs/uikit");
var useI18n_1 = require("hooks/useI18n");
var FarmTabButtons = function (_a) {
    var stakedOnly = _a.stakedOnly, setStakedOnly = _a.setStakedOnly;
    var _b = react_router_dom_1.useRouteMatch(), url = _b.url, isExact = _b.isExact;
    var TranslateString = useI18n_1["default"]();
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(ToggleWrapper, null,
            react_1["default"].createElement(uikit_1.Toggle, { checked: stakedOnly, onChange: function () { return setStakedOnly(!stakedOnly); } }),
            react_1["default"].createElement(uikit_1.Text, null,
                " ",
                TranslateString(699, 'Staked only'))),
        react_1["default"].createElement(uikit_1.ButtonMenu, { activeIndex: isExact ? 0 : 1, size: "sm", variant: "primary" },
            react_1["default"].createElement(uikit_1.ButtonMenuItem, { as: react_router_dom_1.Link, to: "" + url }, TranslateString(698, 'Active')),
            react_1["default"].createElement(uikit_1.ButtonMenuItem, { as: react_router_dom_1.Link, to: url + "/history" }, TranslateString(700, 'Inactive')))));
};
exports["default"] = FarmTabButtons;
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"])));
var ToggleWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  ", " {\n    margin-left: 8px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  ", " {\n    margin-left: 8px;\n  }\n"])), uikit_1.Text);
var templateObject_1, templateObject_2;
