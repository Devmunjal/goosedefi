"use strict";
exports.__esModule = true;
var contracts_1 = require("./contracts");
var types_1 = require("./types");
var farms = [
    {
        pid: 0,
        risk: 5,
        isTokenOnly: true,
        lpSymbol: 'IBG',
        lpAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0'
        },
        tokenSymbol: 'IBG',
        tokenAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0'
        },
        quoteTokenSymbol: types_1.QuoteToken.BNB,
        quoteTokenAdresses: contracts_1["default"].wbnb
    },
    {
        pid: 1,
        risk: 5,
        isTokenOnly: false,
        lpSymbol: 'IBG-BUSD',
        lpAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0x0b54E1D5aD36569d4Da613043A2ae23EBf88Ceb1'
        },
        tokenSymbol: 'IBG',
        tokenAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0'
        },
        quoteTokenSymbol: types_1.QuoteToken.BNB,
        quoteTokenAdresses: contracts_1["default"].wbnb
    },
    {
        pid: 2,
        risk: 5,
        isTokenOnly: false,
        lpSymbol: 'IBG-BNB',
        lpAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0xC85f610DfacBF32d7173c4E53a56426F8313e479'
        },
        tokenSymbol: 'IBG',
        tokenAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0'
        },
        quoteTokenSymbol: types_1.QuoteToken.BNB,
        quoteTokenAdresses: contracts_1["default"].wbnb
    },
    {
        pid: 3,
        risk: 5,
        isTokenOnly: false,
        lpSymbol: 'IBG-USDT',
        lpAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0x2e57946720ba9e891854A7BB3E767bf8008559A8'
        },
        tokenSymbol: 'IBG',
        tokenAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0xa9264b9023D28A78fCF54fAc3CEc827CBbB6ceC0'
        },
        quoteTokenSymbol: types_1.QuoteToken.BNB,
        quoteTokenAdresses: contracts_1["default"].wbnb
    },
    {
        pid: 4,
        risk: 5,
        isTokenOnly: false,
        lpSymbol: 'BUSD-USDT',
        lpAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00'
        },
        tokenSymbol: 'BUSD',
        tokenAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
        },
        quoteTokenSymbol: types_1.QuoteToken.BNB,
        quoteTokenAdresses: contracts_1["default"].wbnb
    },
    {
        pid: 5,
        risk: 5,
        isTokenOnly: false,
        lpSymbol: 'BUSD-BNB',
        lpAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16'
        },
        tokenSymbol: 'BUSD',
        tokenAddresses: {
            97: '0x1de7921C03AC76894e8c930654A12c60d4979217',
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
        },
        quoteTokenSymbol: types_1.QuoteToken.BNB,
        quoteTokenAdresses: contracts_1["default"].wbnb
    },
];
exports["default"] = farms;
