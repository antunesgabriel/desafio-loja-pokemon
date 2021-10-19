import { Box, Card, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import StoreAppBar from "./components/store_app_bar.component";

type StoreLayoutProps = {
  children: React.ReactNode;
};

function StoreLayout({ children }: StoreLayoutProps) {
  const classes = useClasses();

  return (
    <Box className={classes.container}>
      <StoreAppBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card component="main">{children}</Card>
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

export default StoreLayout;
