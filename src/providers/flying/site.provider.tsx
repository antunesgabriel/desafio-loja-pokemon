import { ThemeProvider } from "@mui/system";
import StoreProvider from "providers/commons/store.provider";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import theme from "theme/flying/theme";

type SiteProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

function SiteProvider({ children }: SiteProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <StoreProvider>{children}</StoreProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default SiteProvider;
