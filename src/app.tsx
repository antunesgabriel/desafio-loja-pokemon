import { CssBaseline } from "@mui/material";
import PageLoading from "components/page_loading/page_loading.component";
import { loadProviderBySite } from "drivers/loader";
import { Suspense } from "react";

import AppRoute from "routes/app.routes";
import routes from "routes/routes";

const SiteProvider = loadProviderBySite("/site.provider");

function App() {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<PageLoading />}>
        <SiteProvider>
          <AppRoute routes={routes} />
        </SiteProvider>
      </Suspense>
    </>
  );
}

export default App;
