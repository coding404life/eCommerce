import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CartItem from "./components/CartItem";
import { BreadCrumb } from "../../shared";
import { formatPrice } from "../../shared/util/formatPrice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearListHandler } from "../../store/actions/cartActions";

const ShoppingCart = () => {
  const classes = useStyles();

  const cartReducer = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <Container>
      <BreadCrumb thisRoute="Shopping Cart" />
      <Box my={4}>
        <Typography variant="h6">
          <Box fontWeight="bold">SHOPPING CART</Box>
        </Typography>
        <Hidden smDown>
          <Box my={3} className={classes.root}>
            <Grid container justify="space-between">
              <Grid container item sm={2}>
                <Typography variant="h6">Product photo</Typography>
              </Grid>
              <Grid container item sm={2}>
                <Typography variant="h6">product name</Typography>
              </Grid>
              <Grid container item sm={2}>
                <Typography variant="h6">price</Typography>
              </Grid>
              <Grid container item sm={2}>
                <Typography variant="h6">quantitiy</Typography>
              </Grid>
              <Grid container item sm={2}>
                <Typography variant="h6">total price</Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </Hidden>
        <Box my={3}>
          {/*start loop throught cart array */}
          {cartReducer.cart.map((cur) => (
            <CartItem
              key={cur.id}
              product={cur}
              // removeItemHandler={removeItemFromCart}
              // editCartHandler={editCart}
            />
          ))}
          {/*end loop throught cart array */}
          <Divider />
          <Box my={4} display="flex" justifyContent="space-between">
            <Link to="shop" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.shoppingButtons}
              >
                continue shopping
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(clearListHandler())}
            >
              clear shopping cart
            </Button>
          </Box>
          <Box my={4}>
            <Grid container>
              <Grid item md={8} sm={6}></Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6">CART TOTALS</Typography>
                <Box my={4}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                    mt={3}
                  >
                    <Typography variant="h6">Cart subtotal</Typography>
                    <Typography variant="h6">
                      {formatPrice(cartReducer.totalPrice)}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                    mt={3}
                  >
                    <Typography variant="h6">Shipping and handling</Typography>
                    <Typography variant="h6">{formatPrice(10)}</Typography>
                  </Box>
                  <Divider />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                    mt={3}
                  >
                    <Typography variant="h6">Cart Totals</Typography>
                    <Typography variant="h6" color="primary">
                      {formatPrice(cartReducer.totalPrice + 10)}
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.shoppingButtons}
                >
                  Proceed to checkout
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "uppercase",
  },
  shoppingButtons: {
    color: "#fff",
  },
}));

export default ShoppingCart;
