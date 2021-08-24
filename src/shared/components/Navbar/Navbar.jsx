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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SideDrawer from "../SideDrawer/SideDrawer";
import React from "react";
const Navbar = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cartReducer);
  const [toggleDrawer, setToggleDrawer] = React.useState(false);

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
            </Box>
            <Link to="cart">
              <IconButton className={classes.IconButton}>
                <Badge badgeContent={cart.length} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>
          </Hidden>
          <Hidden only={["lg", "xl", "md"]}>
            <SideDrawer
              toggleDrawerHandler={toggleDrawerHandler}
              toggleDrawer={toggleDrawer}
            >
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
