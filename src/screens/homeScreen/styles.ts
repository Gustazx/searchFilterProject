import styled from "styled-components/native";
import { ThemeType } from "@src/common/theme";

export const Container = styled.View<{ theme: ThemeType }>`
  height: 100%;
  margin: ${({ theme }) => theme.spacing.margins.extraLarge}px;
  padding-top: ${({ theme }) => theme.spacing.paddings.extraLarge}px;
`;

export const PaddingContainer = styled.View<{ theme: ThemeType }>`
  padding: ${({ theme }) => theme.spacing.paddings.medium}px;
`;
