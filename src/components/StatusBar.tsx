import React from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeType } from "@src/common/theme";
import { useTheme } from "styled-components";

export const StatusBar = () => {
  const theme = useTheme() as ThemeType;

  return (
    <ExpoStatusBar style={"light"} backgroundColor={theme.colors.secondary} />
  );
};
