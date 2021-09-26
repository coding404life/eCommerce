import {
  Box,
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../shared/util/formatPrice";

const CheckOut = () => {
  const classes = useStyles();
  const cartReducer = useSelector((state) => state.cartReducer);

  const stripeCheckoutHandler = async () => {
    try {
      const response = await axios.post(
        "https://stripe-checkout-nodejs.herokuapp.com/create-checkout-session",
        {
          items: cartReducer.cart,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.data) {
        window.location = response.data.url;
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {cartReducer.cart.length ? (
        <Grid container justify="center">
          <Grid item xs={11} sm={6} md={6}>
            <Box my={3} textAlign="center">
              <Typography variant="h5">Checkout</Typography>
            </Box>
            <Box my={3}>
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
                  <Typography variant="h6">{formatPrice(1000)}</Typography>
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
                onClick={stripeCheckoutHandler}
              >
                checkout
              </Button>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="center" justify="center">
          <Box py={10} textAlign="center">
            <Box pb={2}>
              <Typography variant="h5">Your Cart is Empty</Typography>
            </Box>
            <Link to="shop" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.shoppingButtons}
              >
                Fill Your Cart
              </Button>
            </Link>
          </Box>
        </Grid>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "uppercase",
  },
  shoppingButtons: {
    color: "#fff",
    "& a": {
      color: "#fff",
      textDecoration: "none",
      width: "100%",
    },
  },
}));

export default CheckOut;
