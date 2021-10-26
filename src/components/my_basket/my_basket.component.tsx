import { memo } from "react";

import {
  SwipeableDrawer,
  Box,
  Theme,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  ListSubheader,
  Typography,
  Divider,
  Toolbar,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Delete } from "@mui/icons-material";

import useStore from "hooks/useStore";
import PokeMedia from "components/poke_media/poke_media.component";

function MyBasket() {
  const {
    basketOpen,
    toggleBasket,
    basket,
    removeFromBasket,
    completeCapture,
  } = useStore();
  const classes = useClasses();

  const list = () => (
    <Box role="basket" onKeyDown={toggleBasket} className={classes.drawer}>
      <List
        subheader={
          <ListSubheader component="div" sx={{ marginY: 2 }}>
            <Typography variant="subtitle2" sx={{ color: "common.black" }}>
              Pokemon Capturados
            </Typography>
            <Divider />
          </ListSubheader>
        }
      >
        {basket.map((item) => {
          return (
            <ListItem
              key={`basket_${item.name}`}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="remover"
                  onClick={() => removeFromBasket(item)}
                >
                  <Delete />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <PokeMedia isAvatar name={item.name} />
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={basketOpen}
        onClose={toggleBasket}
        onOpen={toggleBasket}
      >
        {list()}
        <Box flex={1} />
        <Divider />
        <Box>
          <Toolbar>
            <Button
              fullWidth
              color="success"
              variant="contained"
              disabled={!basket.length}
              onClick={completeCapture}
            >
              Concluir
            </Button>
          </Toolbar>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}

const useClasses = makeStyles((theme: Theme) => ({
  drawer: {
    width: "75vw",

    [theme.breakpoints.up("md")]: {
      width: "20vw",
    },
  },
}));

export default memo(MyBasket);
