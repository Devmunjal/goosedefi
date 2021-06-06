import { Colors } from "./types";

export const baseColors = {
  failure: "#fc0724",
  primary: "#57bd57",
  primaryBright: "#fc0724",
  primaryDark: "#fc0724",
  secondary: "#fc0724",
  success: "#fc0724",
  warning: "#fc0724",
};

export const brandColors = {
  binance: "#FABE41",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "",
  backgroundDisabled: "#473015",
  contrast: "#fc0724",
  invertedContrast: "#fc0724",
  input: "#eeeaf4",
  tertiary: "",
  text: "#fc0724",
  textDisabled: "#BDC2C4",
  textSubtle: "#57bd57",
  borderColor: "#57bd57",
  card: "",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
