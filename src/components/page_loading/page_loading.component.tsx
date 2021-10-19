import { Box, CircularProgress } from "@mui/material";

const PageLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <CircularProgress size={40} color="primary" />
    </Box>
  );
};

export default PageLoading;
