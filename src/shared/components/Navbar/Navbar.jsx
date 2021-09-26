import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Badge,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuOpenOutlinedIcon from "@material-ui/icons/MenuOpenOutlined";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import SideDrawer from "../SideDrawer/SideDrawer";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions/authActions";

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const cart = useSelector((state) => state.cartReducer);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const [toggleDrawer, setToggleDrawer] = React.useState(false);
  const dispatch = useDispatch();
  const toggleDrawerHandler = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Box display="flex" alignItems="center">
            <MenuOpenOutlinedIcon className={classes.logoIcon} />
            <Box fontWeight="fontWeightBold">
              <Typography variant="h4">
                <Link to="/" className={classes.logo}>
                  EREN
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box flexGrow={1} />
          <Hidden smDown>
            <Box>
              <Button className={classes.button}>
                <Link to="/">Home</Link>
              </Button>
              <Button className={classes.button}>
                <Link to="/shop">shop</Link>
              </Button>
              <Button className={classes.button}>
                <Link to="/about">about</Link>
              </Button>
              {isLoggedIn && (
                <Button className={classes.button}>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              )}
            </Box>
            <Box flexGrow={1} />

            <Link to="cart">
              <IconButton className={classes.IconButton}>
                <Badge badgeContent={cart.length} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>
            {!isLoggedIn && (
              <Button className={classes.button}>
                <Link to="/auth">Login</Link>
              </Button>
            )}
            {isLoggedIn && (
              <Button
                className={classes.button}
                onClick={() => {
                  dispatch(logout());
                  history.replace("/auth");
                }}
              >
                Logout
              </Button>
            )}
          </Hidden>

          {/* SideDrawer on small screen */}
          <Hidden only={["lg", "xl", "md"]}>
            <SideDrawer
              toggleDrawerHandler={toggleDrawerHandler}
              toggleDrawer={toggleDrawer}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <MenuOpenOutlinedIcon
                  className={`${classes.logoIcon} ${classes.sideDrawerLogo}`}
                />
                <Box fontWeight="fontWeightBold" pr={5}>
                  <Typography variant="h5">
                    <Link to="/" className={`${classes.logo}`}>
                      EREN
                    </Link>
                  </Typography>
                </Box>
              </Box>

              {/* Menu Button */}
              <Box mt={1} />
              <Button
                className={classes.button}
                onClick={() => setToggleDrawer(false)}
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                className={classes.button}
                onClick={() => setToggleDrawer(false)}
              >
                <Link to="/shop">shop</Link>
              </Button>
              <Button
                className={classes.button}
                onClick={() => setToggleDrawer(false)}
              >
                <Link to="/about">about</Link>
              </Button>
              {isLoggedIn && (
                <Button className={classes.button}>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              )}
              <Box mt={1} />

              {/* cart button */}
              <Link to="cart">
                <IconButton
                  className={classes.IconButton}
                  onClick={() => setToggleDrawer(false)}
                >
                  <Badge badgeContent={cart.length} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </Link>

              {/* Auth Buttons */}
              {!isLoggedIn && (
                <Button
                  className={classes.button}
                  onClick={() => setToggleDrawer(false)}
                >
                  <Link to="/auth">Login</Link>
                </Button>
              )}
              {isLoggedIn && (
                <Button
                  className={classes.button}
                  onClick={() => {
                    dispatch(logout());
                    history.replace("/auth");
                    setToggleDrawer(false);
                  }}
                >
                  Logout
                </Button>
              )}
            </SideDrawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#303030",
    color: "#fff",
    padding: theme.spacing(1, 0),
  },
  logo: {
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
  },
  logoIcon: {
    fontSize: "3rem",
    color: theme.palette.primary.main,
  },
  IconButton: {
    "& span": {
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.contrastText,
    },
  },
  sideDrawerLogo: {
    fontSize: "2.4rem",
  },
  button: {
    color: "#fff",
    padding: "0",
    margin: "0 1rem",
    "& a": {
      color: "#fff",
      textDecoration: "none",
      width: "100%",
      padding: "6px 8px",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.contrastText,
    },
  },
  toolbar: {
    padding: "0",
  },
}));
export default Navbar;
