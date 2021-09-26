import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { formatPrice } from "../../../shared/util/formatPrice";
import DeleteIcon from "@material-ui/icons/Delete";
import { AmounButton } from "../../../shared";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  editCartItem,
} from "../../../store/actions/cartActions";

const CartItem = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [itemAmount, setItemAmount] = useState(product.amount);

  const increaseItemHandler = () => {
    if (itemAmount < 10) {
      let amount;
      setItemAmount((prev) => {
        amount = prev + 1;
        return amount;
      });

      dispatch(editCartItem(product, amount));
    }
  };

  const decreaseItemHandler = () => {
    if (itemAmount > 1) {
      let amount;
      setItemAmount((prev) => {
        amount = prev - 1;
        return amount;
      });

      dispatch(editCartItem(product, amount));
    }
  };

  return (
    <Grid container justify="space-between" alignItems="center">
      <Hidden xsDown>
        <Grid item sm={1} md={2}>
          <img
            className={classes.productImage}
            src={product.images[0].url}
            alt="product"
          />
        </Grid>
        <Grid item sm={3} md={2}>
          <Typography variant="subtitle1">{product.name}</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="subtitle1" color="primary">
            <Box fontWeight="bold">{formatPrice(product.price)}</Box>
          </Typography>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid container item xs={6} alignItems="center" justify="space-between">
          <Box mb={1}>
            <img
              className={classes.productImage}
              src={product.images[0].url}
              alt="product"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1">{product.name}</Typography>
            <Typography variant="subtitle1" color="primary">
              <Box fontWeight="bold">{formatPrice(product.price)}</Box>
            </Typography>
          </Box>
        </Grid>
      </Hidden>

      <AmounButton
        itemAmount={itemAmount}
        increaseItemCount={increaseItemHandler}
        decreaseItemCount={decreaseItemHandler}
      />

      <Grid container item xs={1} sm={2} justify="space-between">
        <Hidden xsDown>
          <Typography variant="subtitle1" color="primary">
            <Box fontWeight="bold">{formatPrice(product.totalPrice)}</Box>
          </Typography>
        </Hidden>
        <DeleteIcon
          className={classes.closeIcon}
          onClick={() => dispatch(removeItemFromCart(product))}
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
