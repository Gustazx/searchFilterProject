import "react-native-gesture-handler";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

import { AppRoutes } from "@src/routes/appRoutes";
import { paperTheme, styledTheme } from "@src/common/theme";
import { StatusBar } from "@src/components/StatusBar";

export default function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <PaperProvider theme={paperTheme}>
        <QueryClientProvider client={queryClient}>
          <StatusBar />
          <AppRoutes />
        </QueryClientProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}
