import React, { useCallback, useState } from "react";

import useCreateBasket from "hooks/useCreateBasket";
import { createContext } from "use-context-selector";
import { Pokemon } from "types/pokemon";
import {
  AlertColor,
  AlertProps,
  Alert as MuiAlert,
  Snackbar,
} from "@mui/material";

type ToastProps = {
  message: string;
  type: AlertColor;
  open: boolean;
};

type StoreProviderProps = {
  children: React.ReactNode;
};

export type StoreState = {
  basket: Pokemon[];
  addInBasket: (selected: Pokemon) => void;
  removeFromBasket: (remove: Pokemon) => void;
  setToast: React.Dispatch<React.SetStateAction<ToastProps>>;
  toggleBasket: () => void;
  basketOpen: boolean;
};

export const StoreContext = createContext({} as StoreState);

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
  const [basketOpen, setBasketOpen] = useState(false);

  const {
    basket,
    addInBasket: defaultAddInBasket,
    removeFromBasket,
  } = useCreateBasket();

  const handleClose = useCallback(() => {
    setToast((old) => ({ ...old, open: false }));
    setToast(INITIAL_STATE);
  }, []);

  const addInBasket = useCallback(
    (selected: Pokemon) => {
      setBasketOpen(true);
      defaultAddInBasket(selected);
    },
    [defaultAddInBasket]
  );

  const toggleBasket = useCallback(() => {
    setBasketOpen((old) => !old);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        basket,
        addInBasket,
        removeFromBasket,
        setToast,
        toggleBasket,
        basketOpen,
      }}
    >
      <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toast.type}>
          {toast.message}
        </Alert>
      </Snackbar>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
