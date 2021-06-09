"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_countup_1 = require("react-countup");
var uikit_1 = require("@pancakeswap-libs/uikit");
var CardValue2 = function (_a) {
    var value = _a.value, decimals = _a.decimals, _b = _a.fontSize, fontSize = _b === void 0 ? '40px' : _b, prefix = _a.prefix;
    var _c = react_countup_1.useCountUp({
        start: 0,
        end: value,
        duration: 1,
        separator: ',',
        decimals: 
        // eslint-disable-next-line no-nested-ternary
        decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3
    }), countUp = _c.countUp, update = _c.update;
    var updateValue = react_1.useRef(update);
    react_1.useEffect(function () {
        updateValue.current(value);
    }, [value, updateValue]);
    return (react_1["default"].createElement(uikit_1.Text, { bold: true, fontSize: fontSize, color: "textSubtle" },
        prefix,
        countUp));
};
exports["default"] = CardValue2;
