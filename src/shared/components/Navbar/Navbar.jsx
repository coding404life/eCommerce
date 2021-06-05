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
} from "@material-ui/core";
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuOpenOutlinedIcon from "@material-ui/icons/MenuOpenOutlined";
import useStyles from "./Style";
import { Link } from "react-router-dom";
import AppContext from "../../context/app-context";
import { useContext } from "react";

const Navbar = () => {
  const classes = useStyles();
  const { cart } = useContext(AppContext);

  return (
    <AppBar position="static" className={classes.root}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Box display="flex" alignItems="center">
            <MenuOpenOutlinedIcon className={classes.logoIcon} />
            <Typography variant="h4">
              <Box fontWeight="fontWeightBold">EREN</Box>
            </Typography>
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
              <Button className={classes.button}>
                <Link to="/contact">contact</Link>
              </Button>
            </Box>
          </Hidden>
          <Box>
            {/* <IconButton className={classes.IconButton} >
                            <SearchOutlinedIcon />
                        </IconButton> */}
            <Link to="cart">
              <IconButton className={classes.IconButton}>
                <Badge badgeContent={cart.length} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
