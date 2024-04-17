import { ThemeType } from "@src/common/theme";
import styled from "styled-components/native";

export const Container = styled.View<{ theme: ThemeType }>`
  margin-top: 40px;
  margin-bottom: 40px;
  gap: ${({ theme }) => theme.spacing.gaps.extraSmall}px;
  align-items: center;
  width: 100%;
`;
