import { useContextSelector } from "use-context-selector";

import { StoreContext } from "providers/commons/store.provider";

export default function useToast() {
  const setToast = useContextSelector(StoreContext, (state) => state.setToast);

  return {
    setToast,
  };
}
