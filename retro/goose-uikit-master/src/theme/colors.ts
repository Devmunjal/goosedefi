import { Colors } from "./types";

export const baseColors = {
  failure: "#bf0411",
  primary: "#bf0411",
  primaryBright: "#bf0411",
  primaryDark: "#bf0411",
  secondary: "#bf0411",
  success: "#bf0411",
  warning: "#bf0411",
};

export const brandColors = {
  binance: "#FABE41",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#C0C0C0",
  backgroundDisabled: "#c0c0c0",
  contrast: "#C0C0C0",
  invertedContrast: "#c0c0c0",
  input: "#eeeaf4",
  tertiary: "#c0c0c0",
  text: "#bf0411",
  textDisabled: "#bf0411",
  textSubtle: "#bf0411",
  borderColor: "#bf0411",
  card: "#C0C0C0",
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
