import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";
import { useState, useRef } from "react";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  // const [valdiationMsg, setValidationMsg] = useState({
  //   emailValidation: "",
  //   passValidation: "",
  // });

  const loginSignupHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const emailValue = emailInputRef.current.value;
    const passValue = passInputRef.current.value;
    // make some validation
    console.log(emailValue, passValue);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKacoCVILsLiRrE_e_nLhY75S5LzUmam4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKacoCVILsLiRrE_e_nLhY75S5LzUmam4";
    }

    try {
      const response = await axios.post(
        url,
        {
          email: emailValue,
          password: passValue,
          returnSecureToken: true,
        },
        {
          Headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data.error.message);
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box
        mt={4}
        py={5}
        px={8}
        border={1}
        textAlign="center"
        borderRadius="borderRadius"
      >
        <Typography variant="h5">{isLogin ? "Login" : "Sign Up"}</Typography>

        <form onSubmit={formSubmitHandler}>
          <Box py={3} px={3}>
            <TextField
              required
              label="Email"
              type="email"
              size="medium"
              inputRef={emailInputRef}
            />
          </Box>
          <Box pb={4} px={3}>
            <TextField
              required
              label="Password"
              type="password"
              inputRef={passInputRef}
            />
          </Box>

          <Button variant="contained" color="secondary" type="submit">
            {isLogin ? "Login" : "Create Account"}
          </Button>
          <Box flexGrow={1} my={2}></Box>
          <Button variant="text" color="secondary" onClick={loginSignupHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default AuthForm;
