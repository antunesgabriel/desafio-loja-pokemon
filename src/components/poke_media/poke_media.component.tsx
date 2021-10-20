import { Avatar, CardMedia, Skeleton } from "@mui/material";
import useSDK from "hooks/useSDK";

type PokeMediaProps = {
  name: string;
  isAvatar?: boolean;
};

const PokeMedia: React.FC<PokeMediaProps> = ({ name, isAvatar }) => {
  const { usePokemon } = useSDK();

  const { data, isLoading, isError } = usePokemon(name);

  if (isLoading || isError) {
    return isAvatar ? (
      <Skeleton variant="circular" width={50} height={50} />
    ) : (
      <Skeleton variant="rectangular" width="100%" height={140} />
    );
  }

  if (isAvatar) {
    return (
      <Avatar
        alt={name}
        src={data?.sprites.front_default}
        sx={{ width: 50, height: 50 }}
      />
    );
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
