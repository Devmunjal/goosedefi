"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var bsc_use_wallet_1 = require("@binance-chain/bsc-use-wallet");
var bignumber_js_1 = require("bignumber.js");
var useI18n_1 = require("hooks/useI18n");
var useHarvest_1 = require("hooks/useHarvest");
var useFarmsWithBalance_1 = require("hooks/useFarmsWithBalance");
var UnlockButton_1 = require("components/UnlockButton");
var CakeHarvestBalance_1 = require("./CakeHarvestBalance");
var CakeWalletBalance_1 = require("./CakeWalletBalance");
var hooks_1 = require("../../../state/hooks");
var useTokenBalance_1 = require("../../../hooks/useTokenBalance");
var addressHelpers_1 = require("../../../utils/addressHelpers");
var useAllEarnings_1 = require("../../../hooks/useAllEarnings");
var formatBalance_1 = require("../../../utils/formatBalance");
var StyledFarmStakingCard = styled_components_1["default"](uikit_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-image: url('/images/egg/9.png');\n  background-repeat: no-repeat;\n  background-position: center right;\n  min-height: 376px;\n  background-size:150px;\n"], ["\n  background-image: url('/images/egg/9.png');\n  background-repeat: no-repeat;\n  background-position: center right;\n  min-height: 376px;\n  background-size:150px;\n"])));
var Block = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 16px;\n"], ["\n  margin-bottom: 16px;\n"])));
var CardImage = styled_components_1["default"].img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 16px;\n"], ["\n  margin-bottom: 16px;\n"])));
var Label = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  padding:10px;\n  font-size: 22px;\n  font-weight:bold;\n  background-repeat:no-repeat;\n"], ["\n  color: ", ";\n  padding:10px;\n  font-size: 22px;\n  font-weight:bold;\n  background-repeat:no-repeat;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Actions = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 24px;\n"], ["\n  margin-top: 24px;\n"])));
var FarmedStakingCard = function () {
    var _a = react_1.useState(false), pendingTx = _a[0], setPendingTx = _a[1];
    var account = bsc_use_wallet_1.useWallet().account;
    var TranslateString = useI18n_1["default"]();
    var farmsWithBalance = useFarmsWithBalance_1["default"]();
    var cakeBalance = formatBalance_1.getBalanceNumber(useTokenBalance_1["default"](addressHelpers_1.getCakeAddress()));
    var eggPrice = hooks_1.usePriceCakeBusd().toNumber();
    var allEarnings = useAllEarnings_1["default"]();
    var earningsSum = allEarnings.reduce(function (accum, earning) {
        return accum + new bignumber_js_1["default"](earning).div(new bignumber_js_1["default"](10).pow(18)).toNumber();
    }, 0);
    var balancesWithValue = farmsWithBalance.filter(function (balanceType) { return balanceType.balance.toNumber() > 0; });
    var onReward = useHarvest_1.useAllHarvest(balancesWithValue.map(function (farmWithBalance) { return farmWithBalance.pid; })).onReward;
    var harvestAllFarms = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setPendingTx(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, onReward()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    setPendingTx(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [onReward]);
    return (react_1["default"].createElement(StyledFarmStakingCard, null,
        react_1["default"].createElement(uikit_1.CardBody, null,
            react_1["default"].createElement(uikit_1.Heading, { style: { fontSize: "2em" }, mb: "24px" }, TranslateString(542, 'Farms & Staking')),
            react_1["default"].createElement(Block, null,
                react_1["default"].createElement(Label, null, TranslateString(544, 'ENTER to Harvest')),
                react_1["default"].createElement(CakeHarvestBalance_1["default"], { earningsSum: earningsSum }),
                react_1["default"].createElement(uikit_1.Text, null,
                    "~$",
                    (eggPrice * earningsSum).toFixed(2))),
            react_1["default"].createElement(Block, null,
                react_1["default"].createElement(Label, null, TranslateString(546, 'ENTER in Wallet')),
                react_1["default"].createElement(CakeWalletBalance_1["default"], { cakeBalance: cakeBalance }),
                react_1["default"].createElement(uikit_1.Text, null,
                    "~$",
                    (eggPrice * cakeBalance).toFixed(2))),
            react_1["default"].createElement(Actions, null, account ? (react_1["default"].createElement(uikit_1.Button, { id: "harvest-all", disabled: balancesWithValue.length <= 0 || pendingTx, onClick: harvestAllFarms, fullWidth: true }, pendingTx
                ? TranslateString(548, 'Collecting EGG')
                : TranslateString(999, "Harvest all (" + balancesWithValue.length + ")"))) : (react_1["default"].createElement(UnlockButton_1["default"], { fullWidth: true }))))));
};
exports["default"] = FarmedStakingCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
