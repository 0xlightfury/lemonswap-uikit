import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#303036",
  primaryBright: "#343135",
  primaryDark: "#F9F9F9",
  secondary: "#44515e",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#eff2f5",
  text: "#262626",
  textDisabled: "#BDC2C4",
  textSubtle: "#809fba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#F9F9F9",
  secondary: "#d4fdff",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#132326",
  input: "#3f585a",
  primaryDark: "#F9F9F9", //0098A1
  tertiary: "#6c8f93",
  text: "#e2fafc",
  textDisabled: "#555e63",
  textSubtle: "#c4d4d3",
  borderColor: "#4b6361",
  card: "#262b2c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
