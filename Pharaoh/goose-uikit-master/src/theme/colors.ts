import { Colors } from "./types";

export const baseColors = {
  failure: "#FABE41",
  primary: "#FABE41",
  primaryBright: "#FABE41",
  primaryDark: "#FABE41",
  secondary: "#FABE41",
  success: "#FABE41",
  warning: "#FABE41",
};

export const brandColors = {
  binance: "#FABE41",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#2A1605",
  backgroundDisabled: "#473015",
  contrast: "#2A1605",
  invertedContrast: "#473015",
  input: "#eeeaf4",
  tertiary: "#473015",
  text: "#FABE41",
  textDisabled: "#BDC2C4",
  textSubtle: "#FABE41",
  borderColor: "#FABE41",
  card: "#2A1605",
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
