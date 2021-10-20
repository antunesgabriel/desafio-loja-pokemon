import { useContextSelector } from "use-context-selector";

import { StoreContext } from "providers/commons/store.provider";

export default function useStore() {
  const basket = useContextSelector(StoreContext, (state) => state.basket);
  const addInBasket = useContextSelector(
    StoreContext,
    (state) => state.addInBasket
  );

  const removeFromBasket = useContextSelector(
    StoreContext,
    (state) => state.removeFromBasket
  );

  return {
    basket,
    addInBasket,
    removeFromBasket,
  };
}
