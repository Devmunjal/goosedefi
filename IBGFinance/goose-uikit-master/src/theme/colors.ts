import { Colors } from "./types";

export const baseColors = {
  failure: "#BF1B2C",
  primary: "#E52C3F",
  primaryBright: "#E52C3F",
  primaryDark: "#E52C3F",
  secondary: "#E52C3F",
  success: "#E52C3F",
  warning: "#E52C3F",
};

export const brandColors = {
  binance: "#FABE41",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "",
  backgroundDisabled: "",
  contrast: "#E52C3F",
  invertedContrast: "#E52C3F",
  input: "#eeeaf4",
  tertiary: "",
  text: "#E52C3F",
  textDisabled: "#FFFFFF",
  textSubtle: "#737373",
  borderColor: "#737373",
  card: "",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#B2B2B2",
  background: "",
  backgroundDisabled: "",
  contrast: "#FFFFFF",
  invertedContrast: "#E52C3F",
  input: "#737373",
  primaryDark: "",
  tertiary: "",
  text: "#FFFFFF",
  textDisabled: "#737373",
  textSubtle: "#CDCBCB",
  borderColor: "#E52C3F",
  card: "",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
