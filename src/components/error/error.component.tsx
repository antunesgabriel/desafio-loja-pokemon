import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import errorImg from "assets/img/error.gif";

const Error: React.FC<{ onClickTryAgain: () => void }> = ({
  onClickTryAgain,
}) => {
  const classes = useClasses();

  return (
    <Box className={classes.wrapper}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="194" image={errorImg} alt="cry" />
          <CardContent>
            <Typography gutterBottom variant="body1">
              Ops! Algo deu errado :(
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="medium"
            color="info"
            fullWidth
            variant="contained"
            onClick={onClickTryAgain}
          >
            Tentar Novamente
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

const useClasses = makeStyles(() => ({
  wrapper: {
    width: "100%",
    maxWidth: 360,
  },
}));

export default Error;
