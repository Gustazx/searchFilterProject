import React from "react";
import { ActivityIndicator } from "react-native-paper";

import { ThemeType } from "@src/common/theme";
import { useTheme } from "styled-components";

import * as S from "./styles";

export const InfinityScrollLoading = () => {
  const theme = useTheme() as ThemeType;

  return (
    <S.Container>
      <ActivityIndicator size={theme.sizes.icon.medium} />
    </S.Container>
  );
};
