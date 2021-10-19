import { CssBaseline } from "@mui/material";
import PageLoading from "components/page_loading/page_loading.component";
import { loadStoreProvider } from "drivers/loader";
import { Suspense } from "react";

import AppRoute from "routes/app.routes";
import routes from "routes/routes";

const StoreProvider = loadStoreProvider("/store.provider");

function App() {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<PageLoading />}>
        <StoreProvider>
          <AppRoute routes={routes} />
        </StoreProvider>
      </Suspense>
    </>
  );
}

export default App;
