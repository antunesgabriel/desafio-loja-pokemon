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

function HomePage(): React.ReactElement {
  const { useListPokemon } = useSDK();
  const { isLoading, isError, data = [] } = useListPokemon();
  const { filtered, handleChangeValue, search } = useFilterOnInput(data, [
    "pokemon",
    "name",
  ]);

  if (isLoading) {
    return <div>maravilhosa tela de loading aqui</div>;
  }

  if (isError) {
    <div>ouve um erro</div>;
  }

  return (
    <StoreLayout
      showSearchBar
      onChangeSerach={handleChangeValue}
      searchValue={search}
    >
      <Grid container spacing={4}>
        {filtered.map((pokemon) => (
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
                >
                  Adicionar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StoreLayout>
  );
}

export default HomePage;
