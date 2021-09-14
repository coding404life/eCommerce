import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import React, { useState } from "react";
import { formatPrice } from "../../shared/util/formatPrice";
import { Link, useParams } from "react-router-dom";
import { CircularProgress, IconButton } from "@material-ui/core";
import useFetch from "../../shared/hooks/useFetch";
import { AmounButton, BreadCrumb } from "../../shared";
import { useDispatch } from "react-redux";
import { addTocart } from "../../store/actions/cartActions";

const SingleProduct = () => {
  const [itemAmount, setItemAmount] = useState(1);
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id } = useParams();
  const productID = id.slice(1, id.length);
  const { data, isLoading, error } = useFetch(
    `https://course-api.com/react-store-single-product?id=${productID}`
  );

  const increaseItemCount = () => {
    if (itemAmount < 10) {
      setItemAmount(itemAmount + 1);
    }
  };

  const decreaseItemCount = () => {
    if (itemAmount > 1) {
      setItemAmount(itemAmount - 1);
    }
  };

  const productData = {
    ...data,
    amount: itemAmount,
    totalPrice: data.price * itemAmount,
  };

  return (
    <Box>
      {isLoading ? (
        <Box
          display="flex"
          minHeight="55vh"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container justify="center" alignItems="center">
            {error ? (
              <Box>
                <Typography variant="h3" color="textSecondary">
                  Product Not Found
                </Typography>
                <Typography variant="h5" color="textSecondary">
                  {error}
                </Typography>
              </Box>
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </Box>
      ) : (
        <Container>
          <BreadCrumb thisRoute="Spacing chair design" />
          <Grid container justify="space-between" className={classes.root}>
            <Grid item sm={6} xs={12}>
              <Box className={classes.productImgContainer}>
                <img
                  src={data.images[0].url}
                  alt="chair"
                  className={classes.productImg}
                />
              </Box>
              <Box
                display="flex"
                my={3}
                justifyContent="center"
                flexWrap="wrap"
              >
                <img
                  src={data.images[1].url}
                  alt="chair"
                  className={classes.subImg}
                />
                <img
                  src={data.images[2].url}
                  alt="chair"
                  className={classes.subImg}
                />
                <img
                  src={data.images[3].url}
                  alt="chair"
                  className={classes.subImg}
                />
                <img
                  src={data.images[4].url}
                  alt="chair"
                  className={classes.subImg}
                />
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box mb={4}>
                <Typography variant="h5">
                  <Box fontWeight="bold" mb={4}>
                    {data.name}
                  </Box>
                </Typography>
                <Typography varinat="subtitle1" color="textSecondary">
                  {data.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  <Box fontWeight="bold" mt={1}>
                    {formatPrice(data.price)}
                  </Box>
                </Typography>
              </Box>
              <Box display="flex" mb={4}>
                <Box mr={3}>
                  <Typography variant="h6">
                    <Box mb={1}>Available:</Box>
                    <Box mb={1}>Category:</Box>
                    <Box mb={1}>Brand:</Box>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" color="textSecondary">
                    <Box mb={1} fontWeight="normal">
                      inStock
                    </Box>
                    <Box mb={1} fontWeight="normal">
                      {data.category}
                    </Box>
                    <Box mb={1} fontWeight="normal">
                      Ikea
                    </Box>
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box display="flex" mt={4}>
                <Box mr={3}>
                  <Typography variant="h6">Color: </Typography>
                </Box>
                <Box className={classes.colorWrapper}>
                  {productData.colors.map((color, index) => {
                    return (
                      <IconButton
                        key={index}
                        className={classes.iconButton}
                        style={{ backgroundColor: color }}
                      >
                        <CheckIcon className={classes.checkIcon} />
                      </IconButton>
                    );
                  })}
                </Box>
              </Box>
              <Typography variant="h6" color="primary">
                <Box fontWeight="bold" mt={1}>
                  Total Price : {formatPrice(productData.totalPrice)}
                </Box>
              </Typography>
              <AmounButton
                itemAmount={itemAmount}
                increaseItemCount={increaseItemCount}
                decreaseItemCount={decreaseItemCount}
              />

              <Box mt={3}>
                <Link to="cart" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(addTocart(productData))}
                  >
                    add to cart
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </Box>
  );
};

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  productImgContainer: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 2rem",
  },
  productImg: {
    maxWidth: "100%",
    height: "25vmax",
  },
  subImg: {
    backgroundColor: "#f5f5f5",
    width: "8vmax",
    objectFit: "cover",
    margin: `0 1rem 1rem 0`,
  },
  iconButton: {
    backgroundColor: "#f00",
    width: "1rem",
    height: "1rem",
    marginRight: ".3rem",
    display: "flex !important",
  },
  checkIcon: {
    color: "#fff",
    fontSize: "1rem",
  },
  colorWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  productNumber: {
    padding: "0 .6rem",
  },
  iconsBG: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  },
}));

export default SingleProduct;
