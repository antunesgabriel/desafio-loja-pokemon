import { Box, Card, Container, Grid } from "@mui/material";
import { memo, useState } from "react";
import { makeStyles } from "@mui/styles";

import StoreAppBar from "./components/store_app_bar.component";
import MyBasket from "components/my_basket/my_basket.component";

type StoreLayoutProps = {
  children: React.ReactNode;
  showSearchBar?: boolean;
  onChangeSerach?: (
    $e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchValue?: string;
};

function StoreLayout({
  children,
  showSearchBar,
  onChangeSerach,
  searchValue,
}: StoreLayoutProps) {
  const classes = useClasses();

  return (
    <Box className={classes.container}>
      <MyBasket />

      <StoreAppBar
        showSearchBar={showSearchBar}
        onChangeSerach={onChangeSerach}
        searchValue={searchValue}
      />
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card component="main" sx={{ p: 2, mb: 3 }}>
              {children}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const useClasses = makeStyles({
  container: {
    minHeight: "100vh",
  },
});

export default memo(StoreLayout);
