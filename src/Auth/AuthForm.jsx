import { Box, Grid, Typography } from "@material-ui/core";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Box
        border={1}
        mt={4}
        textAlign="center"
        p={5}
        pt={4}
        borderRadius="borderRadius"
        height="100%"
      >
        <Typography variant="h5">{isLogin ? "Login" : "Sign Up"}</Typography>
        <form></form>
      </Box>
    </Grid>
  );
};

export default AuthForm;
