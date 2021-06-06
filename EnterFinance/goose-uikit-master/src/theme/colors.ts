import { Colors } from "./types";

export const baseColors = {
  failure: "#005494",
  primary: "#005494",
  primaryBright: "#005494",
  primaryDark: "#005494",
  secondary: "#005494",
  success: "#005494",
  warning: "#005494",
};

export const brandColors = {
  binance: "#005494",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFFFF",
  backgroundDisabled: "#c0c0c0",
  contrast: "#c0c0c0",
  invertedContrast: "#c0c0c0",
  input: "#eeeaf4",
  tertiary: "#c0c0c0",
  text: "#005494",
  textDisabled: "#005494",
  textSubtle: "#005494",
  borderColor: "#005494",
  card: "#FFFFFFc1",
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
