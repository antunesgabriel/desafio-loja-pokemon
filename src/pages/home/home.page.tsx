import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import useSDK from "hooks/useSDK";
import PokeMedia from "components/poke_media/poke_media.component";
import StoreLayout from "layout/store.layout";
import useFilterOnInput from "hooks/useFilterOnInput";
import useStore from "hooks/useStore";
import PageLoading from "components/page_loading/page_loading.component";
import Error from "components/error/error.component";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useCallback } from "react";

function HomePage(): React.ReactElement {
  const { useListPokemon } = useSDK();
  const { isLoading, isError, data = [] } = useListPokemon();
  const { filtered, handleChangeValue, search } = useFilterOnInput(data, [
    "pokemon",
    "name",
  ]);
  const { basket, addInBasket } = useStore();
  const classes = useClasses();

  const onClickTryAgain = useCallback(() => {
    window.location.reload();
  }, []);

  if (isLoading) {
    return <PageLoading />;
  }

  if (!isError) {
    return (
      <StoreLayout>
        <Box className={classes.errorWrapper}>
          <Error onClickTryAgain={onClickTryAgain} />
        </Box>
      </StoreLayout>
    );
  }

  return (
    <StoreLayout
      showSearchBar
      onChangeSerach={handleChangeValue}
      searchValue={search}
    >
      <Grid container spacing={4}>
        {filtered.map((pokemon) => {
          const selected = !!basket.find(
            (item) => item.name === pokemon.pokemon.name
          );

          return (
            <Grid item xs={12} md={3} key={pokemon.pokemon.url}>
              <Card>
                <CardActionArea>
                  <PokeMedia name={pokemon.pokemon.name} />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2">
                      {pokemon.pokemon.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="medium"
                    color="primary"
                    fullWidth
                    variant="contained"
                    disabled={selected}
                    onClick={() => addInBasket(pokemon.pokemon)}
                  >
                    {selected ? "Capturado" : "Capturar"}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </StoreLayout>
  );
}

const useClasses = makeStyles(() => ({
  errorWrapper: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default HomePage;
