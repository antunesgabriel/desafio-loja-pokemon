import React, { useCallback, useState } from "react";

import useCreateBasket from "hooks/useCreateBasket";
import { createContext } from "use-context-selector";
import { Pokemon } from "types/pokemon";
import {
  AlertColor,
  AlertProps,
  Alert as MuiAlert,
  Snackbar,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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
  completeCapture: () => void;
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
  const [modalOpen, setModalOpen] = useState(false);

  const {
    basket,
    addInBasket: defaultAddInBasket,
    removeFromBasket,
    resetBasket,
  } = useCreateBasket();

  const classes = useClasses();

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

  const toggleModal = useCallback(() => {
    setModalOpen((old) => !old);
  }, []);

  const completeCapture = useCallback(() => {
    toggleBasket();
    toggleModal();
  }, [toggleModal, toggleBasket]);

  const onModalClose = useCallback(() => {
    toggleModal();
    resetBasket();
  }, [resetBasket, toggleModal]);

  return (
    <StoreContext.Provider
      value={{
        basket,
        addInBasket,
        removeFromBasket,
        setToast,
        toggleBasket,
        basketOpen,
        completeCapture,
      }}
    >
      <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toast.type}>
          {toast.message}
        </Alert>
      </Snackbar>

      <Modal
        open={modalOpen}
        onClose={onModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        classes={{ root: classes.modalWrapper }}
      >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h6">
            Yeahhhh!! Parabéns aventureiro!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Você conseguiu {basket.length}{" "}
            {basket.length > 1 ? "novos" : "novo"} Pokemon!
          </Typography>
        </Box>
      </Modal>

      {children}
    </StoreContext.Provider>
  );
}

const styleModal = {
  width: "100%",
  maxWidth: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: 2,
};

const useClasses = makeStyles(() => ({
  modalWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default StoreProvider;
