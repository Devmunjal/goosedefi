import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: `0px 0px 12px 2px ${lightColors.textDisabled}` ,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "",
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: `0px 0px 12px 2px ${darkColors.textDisabled}` ,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "",
};
