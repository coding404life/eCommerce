import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { formatPrice } from "../../../shared/util/formatPrice";
import { Link, useParams } from "react-router-dom";
import { useProductContextProvider } from "../../../shared/context/ProductContext";
import { CircularProgress } from "@material-ui/core";
import useFetch from "../../../shared/hooks/useFetch";
import { AmounButton, BreadCrumb } from "../../../shared";

const SingleProduct = () => {
  const classes = useStyles();
  const { addTocart } = useProductContextProvider();
  const [itemAmount, setItemAmount] = useState(1);
  const { id } = useParams();
  const productID = id.slice(1, id.length);
  const { data, isLoading } = useFetch(
    `https://course-api.com/react-store-single-product?id=${productID}`
  );

  const productData = {
    ...data,
    amount: itemAmount,
    totalPrice: data.price * itemAmount,
  };

  const addtItemHandler = () => {
    addTocart(productData);
  };

  return (
    <Box>
      {isLoading ? (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
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
              <Box display="flex" my={3} justifyContent="center">
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

              <Typography variant="h6" color="primary">
                <Box fontWeight="bold" mt={1}>
                  Total Price : {formatPrice(productData.totalPrice)}
                </Box>
              </Typography>
              <AmounButton
                itemAmount={itemAmount}
                setItemAmount={setItemAmount}
              />

              <Box mt={3}>
                <Link to="cart" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={addtItemHandler}
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
    height: "8vmax",
    margin: `0 1rem`,
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
