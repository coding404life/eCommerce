import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, logout } from "../../store/actions/authActions";

const AuthForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const passInputRef = useRef();

  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const emailValue = emailInputRef.current.value;
    const passValue = passInputRef.current.value;

    // make some validation
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

      if (response.data) {
        const expirationTime = Date.now() + response.data.expiresIn * 1000;
        dispatch(login(response.data.idToken, expirationTime));
        setTimeout(() => dispatch(logout()), expirationTime - Date.now());
        history.replace("/");
      }
    } catch (err) {
      alert(err.response.data.error.message);
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box
        my={4}
        py={5}
        px={2}
        width={"30vmax"}
        border={1}
        textAlign="center"
        borderRadius="borderRadius"
      >
        <Typography variant="h5">{isLogin ? "Login" : "Sign Up"}</Typography>

        <form onSubmit={formSubmitHandler}>
          <Box pt={2}>
            <TextField
              required
              label="Email"
              type="email"
              inputRef={emailInputRef}
              className={classes.inputField}
            />
          </Box>
          <Box py={4}>
            <TextField
              className={classes.inputField}
              required
              label="Password"
              type="password"
              inputRef={passInputRef}
            />
          </Box>
          <Button variant="contained" color="secondary" type="submit">
            <Typography>{isLogin ? "Login" : "Create Account"}</Typography>
          </Button>
          <Box flexGrow={1} my={2}></Box>
          <Button
            variant="text"
            color="secondary"
            onClick={switchAuthModeHandler}
          >
            <Typography>
              {isLogin ? "Create new account" : "Login with existing account"}
            </Typography>
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

const useStyles = makeStyles({
  inputField: {
    width: "100%",
  },
});

export default AuthForm;
