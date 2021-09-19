import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const CheckOut = () => {
  return (
    <>
      <Grid container justify="center">
        <Box my={3} px={4} textAlign="center">
          <Typography variant="h5">Our Story</Typography>
          <Typography variant="body1">
            Our Story Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default CheckOut;
