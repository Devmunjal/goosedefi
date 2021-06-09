"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var uikit_1 = require("@pancakeswap-libs/uikit");
var bsc_use_wallet_1 = require("@binance-chain/bsc-use-wallet");
var useI18n_1 = require("hooks/useI18n");
var UnlockButton = function (props) {
    var TranslateString = useI18n_1["default"]();
    var _a = bsc_use_wallet_1.useWallet(), connect = _a.connect, reset = _a.reset;
    var onPresentConnectModal = uikit_1.useWalletModal(connect, reset).onPresentConnectModal;
    return (react_1["default"].createElement(uikit_1.Button, __assign({ style: {
            backgroundImage: "linear-gradient(to right, #5a9d49, #90d480, #76bda5)", padding: "25px 25px"
        }, onClick: onPresentConnectModal }, props),
        react_1["default"].createElement(uikit_1.Text, { color: "white", style: { fontSize: "1.5em" } }, TranslateString(292, 'Unlock Wallet'))));
};
exports["default"] = UnlockButton;
