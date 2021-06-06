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
exports.darkColors = exports.lightColors = exports.brandColors = exports.baseColors = void 0;
// export const baseColors = {
//   failure: "#ED4B9E",
//   primary: "#aa8929",
//   primaryBright: "#aa8929",
//   primaryDark: "#aa8929",
//   secondary: "#7645D9",
//   success: "#31D0AA",
//   warning: "#FFB237",
// };
// export const brandColors = {
//   binance: "#F0B90B",
// };
// export const lightColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   background: "#FAF9FA",
//   backgroundDisabled: "#E9EAEB",
//   contrast: "#191326",
//   invertedContrast: "#FFFFFF",
//   input: "#eeeaf4",
//   tertiary: "#EFF4F5",
//   text: "#452A7A",
//   textDisabled: "#BDC2C4",
//   textSubtle: "#8f80ba",
//   borderColor: "#E9EAEB",
//   card: "#FFFFFF",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
//   },
// };
// export const darkColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   secondary: "#9A6AFF",
//   background: "#343135",
//   backgroundDisabled: "#3c3742",
//   contrast: "#FFFFFF",
//   invertedContrast: "#191326",
//   input: "#483f5a",
//   primaryDark: "#0098A1",
//   tertiary: "#353547",
//   text: "#EAE2FC",
//   textDisabled: "#666171",
//   textSubtle: "#c9c4d4",
//   borderColor: "#524B63",
//   card: "#27262c",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
//   },
// };
exports.baseColors = {
    failure: "#ED4B9E",
    primary: "#75dfee",
    primaryBright: "#75dfee",
    primaryDark: "#75dfee",
    secondary: "#75dfee",
    success: "#c4f0e6",
    warning: "#FFB237"
};
exports.brandColors = {
    binance: "#F0B90B"
};
exports.lightColors = __assign(__assign(__assign({}, exports.baseColors), exports.brandColors), { background: "#f5f6fa", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "#14c39a", textColor: "#000000", textDisabled: "#c0c0c0", textSubtle: "#c0c0c0", borderColor: "#E9EAEB", card: "#FFFFFF", cardBackground: '#FFFFFF', gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)"
    }, bgMenu: '#fff' });
exports.darkColors = __assign(__assign(__assign({}, exports.baseColors), exports.brandColors), { secondary: "#fff", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", textColor: "#FFF", text: "#75dfee", textDisabled: "#666171", textSubtle: "#75dfee", borderColor: "#524B63", card: "#27262c", cardBackground: '#27262c', gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)"
    }, bgMenu: '#4e4c4f' });
