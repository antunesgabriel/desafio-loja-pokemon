import { ThemeProvider } from "@mui/system";
import React, { useCallback, useState } from "react";
import { QueryClientProvider } from "react-query";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import {
  queryClient,
  StoreContext,
  ToastProps,
} from "providers/commons/context";
import theme from "theme/electric/theme";
import useBasket from "hooks/useBasket";

type StoreProviderProps = {
  children: React.ReactNode;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const INITIAL_STATE: ToastProps = {
  open: false,
  message: "",
  type: "info",
};

function StoreProvider({ children }: StoreProviderProps) {
  const [toast, setToast] = useState<ToastProps>(INITIAL_STATE);

  const { basket, addInBasket, removeFromBasket } = useBasket();

  const handleClose = useCallback(() => {
    setToast((old) => ({ ...old, open: false }));
    setToast(INITIAL_STATE);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <StoreContext.Provider
          value={{ setToast, basket, addInBasket, removeFromBasket }}
        >
          <Snackbar
            open={toast.open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={toast.type}>
              {toast.message}
            </Alert>
          </Snackbar>
          {children}
        </StoreContext.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default StoreProvider;
