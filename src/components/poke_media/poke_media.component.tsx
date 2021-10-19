import { CardMedia, Skeleton } from "@mui/material";
import useSDK from "hooks/useSDK";

type PokeMediaProps = {
  name: string;
};

const PokeMedia: React.FC<PokeMediaProps> = ({ name }) => {
  const { usePokemon } = useSDK();

  const { data, isLoading, isError } = usePokemon(name);

  if (isLoading || isError) {
    return <Skeleton variant="rectangular" width="100%" height={140} />;
  }

  return (
    <CardMedia
      component="img"
      height="140"
      image={data?.sprites.front_default}
      alt={name}
    />
  );
};

export default PokeMedia;
