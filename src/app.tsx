import { CssBaseline } from "@mui/material";
import { loadStoreProvider } from "drivers/loader";

import AppRoute from "routes/app.routes";
import routes from "routes/routes";

const StoreProvider = loadStoreProvider("/store.provider");

function App() {
  return (
    <>
      <CssBaseline />
      <StoreProvider>
        <AppRoute routes={routes} />
      </StoreProvider>
    </>
  );
}

export default App;
