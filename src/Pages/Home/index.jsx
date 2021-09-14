import Slider from "./components/Slider";
import Cards from "./components/Cards";
import { Box } from "@material-ui/core";
import NewsLetter from "./components/NewsLetter";
import React from "react";

const Home = () => {
  return (
    <>
      <Slider />
      <Box my={4}>
        <Cards />
      </Box>
      <NewsLetter />
    </>
  );
};

export default React.memo(Home);
