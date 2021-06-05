import { Box, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import { formatPrice } from "../../../shared/util/formatPrice";
import DeleteIcon from "@material-ui/icons/Delete";
import { AmounButton } from "../../../shared";
import { useState } from "react";

const CartItem = ({ item, removeItem }) => {
  const classes = useStyles();
  const [itemAmount, setItemAmount] = useState(item.amount);

  const product = {
    ...item,
    amount: itemAmount,
    totalPrice: item.price * itemAmount,
  };

  return (
    <Grid container justify="space-between" alignItems="center">
      <Hidden xsDown>
        <Grid item sm={1} md={2}>
          <img
            className={classes.productImage}
            src={product.image}
            alt="product"
          />
        </Grid>
        <Grid item sm={3} md={2}>
          <Typography variant="subtitle1">{product.title}</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="subtitle1" color="primary">
            <Box fontWeight="bold">{formatPrice(product.price)}</Box>
          </Typography>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid container item xs={6} alignItems="center">
          <img
            className={classes.productImage}
            src={product.image}
            alt="product"
          />
          <Box>
            <Typography variant="subtitle1">{product.title}</Typography>
            <Typography variant="subtitle1" color="primary">
              <Box fontWeight="bold">{formatPrice(product.price)}</Box>
            </Typography>
          </Box>
        </Grid>
      </Hidden>

      <AmounButton setItemAmount={setItemAmount} itemAmount={product.amount} />

      <Grid container item xs={1} sm={2} justify="space-between">
        <Hidden xsDown>
          <Typography variant="subtitle1" color="primary">
            <Box fontWeight="bold">{formatPrice(product.totalPrice)}</Box>
          </Typography>
        </Hidden>
        <DeleteIcon
          className={classes.closeIcon}
          onClick={() => removeItem(product.id)}
        />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "uppercase",
  },
  productImage: {
    maxWidth: "8vmax",
    height: "8vmax",
  },
  productNumber: {
    padding: "0 .5rem",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  iconsBG: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  },
  closeIcon: {
    "& :hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
  shoppingButtons: {
    color: "#fff",
  },
}));

export default CartItem;
