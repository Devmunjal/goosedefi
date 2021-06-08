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
var erc20_1 = require("utils/erc20");
var uikit_1 = require("@pancakeswap-libs/uikit");
var hooks_1 = require("state/hooks");
var useI18n_1 = require("hooks/useI18n");
var UnlockButton_1 = require("components/UnlockButton");
var useApprove_1 = require("hooks/useApprove");
var StakeAction_1 = require("./StakeAction");
var HarvestAction_1 = require("./HarvestAction");
var Action = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: 16px;\n"], ["\n  padding-top: 16px;\n"])));
var CardActions = function (_a) {
    var farm = _a.farm, ethereum = _a.ethereum, account = _a.account;
    var TranslateString = useI18n_1["default"]();
    var _b = react_1.useState(false), requestedApproval = _b[0], setRequestedApproval = _b[1];
    var _c = hooks_1.useFarmFromPid(farm.pid), pid = _c.pid, lpAddresses = _c.lpAddresses, tokenAddresses = _c.tokenAddresses, isTokenOnly = _c.isTokenOnly, depositFeeBP = _c.depositFeeBP;
    var _d = hooks_1.useFarmUser(pid), allowance = _d.allowance, tokenBalance = _d.tokenBalance, stakedBalance = _d.stakedBalance, earnings = _d.earnings;
    var lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID];
    var tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID];
    var lpName = farm.lpSymbol.toUpperCase();
    var isApproved = account && allowance && allowance.isGreaterThan(0);
    var lpContract = react_1.useMemo(function () {
        if (isTokenOnly) {
            return erc20_1.getContract(ethereum, tokenAddress);
        }
        return erc20_1.getContract(ethereum, lpAddress);
    }, [ethereum, lpAddress, tokenAddress, isTokenOnly]);
    var onApprove = useApprove_1.useApprove(lpContract).onApprove;
    var handleApprove = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setRequestedApproval(true);
                    return [4 /*yield*/, onApprove()];
                case 1:
                    _a.sent();
                    setRequestedApproval(false);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [onApprove]);
    var renderApprovalOrStakeButton = function () {
        return isApproved ? (react_1["default"].createElement(StakeAction_1["default"], { stakedBalance: stakedBalance, tokenBalance: tokenBalance, tokenName: lpName, pid: pid, depositFeeBP: depositFeeBP })) : (react_1["default"].createElement(uikit_1.Button, { mt: "8px", fullWidth: true, disabled: requestedApproval, onClick: handleApprove }, TranslateString(999, 'Approve Contract')));
    };
    return (react_1["default"].createElement(Action, null,
        react_1["default"].createElement(uikit_1.Flex, null,
            react_1["default"].createElement(uikit_1.Text, { bold: true, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "3px" }, "IBG"),
            react_1["default"].createElement(uikit_1.Text, { bold: true, textTransform: "uppercase", color: "textSubtle", fontSize: "12px" }, TranslateString(999, 'Earned'))),
        react_1["default"].createElement(HarvestAction_1["default"], { earnings: earnings, pid: pid }),
        react_1["default"].createElement(uikit_1.Flex, null,
            react_1["default"].createElement(uikit_1.Text, { bold: true, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "3px" }, lpName),
            react_1["default"].createElement(uikit_1.Text, { bold: true, textTransform: "uppercase", color: "textSubtle", fontSize: "12px" }, TranslateString(999, 'Staked'))),
        !account ? react_1["default"].createElement(UnlockButton_1["default"], { mt: "8px", fullWidth: true }) : renderApprovalOrStakeButton()));
};
exports["default"] = CardActions;
var templateObject_1;
