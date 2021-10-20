import React from "react";
import { QueryClient } from "react-query";
import { AlertColor } from "@mui/material";
import { createContext } from "use-context-selector";
import { Pokemon } from "types/pokemon";

export type ToastProps = {
  message: string;
  type: AlertColor;
  open: boolean;
};

export type StoreState = {
  setToast: React.Dispatch<React.SetStateAction<ToastProps>>;
  basket: Pokemon[];
  addInBasket: (selected: Pokemon) => void;
  removeFromBasket: (remove: Pokemon) => void;
};

export const StoreContext = createContext({} as StoreState);
export const queryClient = new QueryClient();
