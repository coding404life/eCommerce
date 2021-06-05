import { Box, Typography } from "@material-ui/core";
import React from "react";
import Banner from "../ui/Banner";

const NotFound = () => {
  return (
    <Box>
      <Banner />
      <Box display="flex" justifyContent="center" my={10}>
        <Typography variant="h4">
          <Box>Error 404 page not found!</Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
