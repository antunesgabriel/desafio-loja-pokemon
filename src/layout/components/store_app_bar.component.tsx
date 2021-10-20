import { memo, FC } from "react";
import {
  alpha,
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Hidden,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingBasket as ShoppingBasketIcon,
} from "@mui/icons-material";
import useSDK from "hooks/useSDK";
import useStore from "hooks/useStore";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: "100%",
  marginLeft: theme.spacing(3),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StoreAppBar: FC<{
  showSearchBar?: boolean;
  onSearch?: ($e: any) => void;
  searchValue?: string;
}> = ({ showSearchBar, onSearch, searchValue }) => {
  const { basket, toggleBasket } = useStore();
  const { site } = useSDK();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Hidden mdDown>
          <Typography variant="h6">{site.storeName}</Typography>
        </Hidden>

        {showSearchBar ? (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar..."
              inputProps={{ "aria-label": "pesquisar por pokemon" }}
              onInput={onSearch}
              value={searchValue}
            />
          </Search>
        ) : (
          <Box flexGrow={1} />
        )}
        <Box sx={{ ml: 3, color: "primary.contrastText" }}>
          <IconButton
            aria-label="abrir sacola"
            color="inherit"
            component="span"
            onClick={toggleBasket}
          >
            <Badge badgeContent={basket.length} color="info">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default memo(StoreAppBar);
