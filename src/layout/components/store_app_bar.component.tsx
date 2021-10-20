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
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingBasket as ShoppingBasketIcon,
} from "@mui/icons-material";
import useSDK from "hooks/useSDK";

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
  onChangeSerach?: (
    $e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchValue?: string;
}> = ({ showSearchBar, onChangeSerach, searchValue }) => {
  const { site } = useSDK();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6">{site.storeName}</Typography>
        {showSearchBar && (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar..."
              inputProps={{ "aria-label": "pesquisar por pokemon" }}
              onChange={onChangeSerach}
              value={searchValue}
            />
          </Search>
        )}
        <Box sx={{ ml: 3, color: "primary.contrastText" }}>
          <IconButton
            aria-label="abrir sacola"
            color="inherit"
            component="span"
          >
            <ShoppingBasketIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default memo(StoreAppBar);
