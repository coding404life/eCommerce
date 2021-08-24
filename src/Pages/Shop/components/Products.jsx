import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

import { formatPrice } from "../../../shared/util/formatPrice";
import { Link } from "react-router-dom";

const Products = (props) => {
  const classes = useStyles();

  const { data } = props;
  const title = data.name.slice(0, 30);

  return (
    <Box
      id={data.id}
      px={3}
      pt={3}
      display="flex"
      flexDirection="column"
      style={{ transition: "all 0.3s linear" }}
    >
      <Box className={classes.container}>
        <div className={classes.overlay + " overlay"}></div>
        <img className={classes.imgStyle} src={data.image} alt={data.image} />
        <Link
          className={classes.searchIcon + " show"}
          to={`/products:${data.id}`}
        >
          <SearchOutlinedIcon />
        </Link>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.title} color="primary">
          {formatPrice(data.price)}
        </Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    "&:hover": {
      "& .show": {
        opacity: 1,
      },
      "& .overlay": {
        opacity: 0.6,
      },
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#333",
    opacity: 0,
    zIndex: 100,
    transition: "all 0.3s linear",
  },
  searchIcon: {
    position: "absolute",
    color: "#fff",
    cursor: "pointer",
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    opacity: 0,
    zIndex: 200,
  },
  imgStyle: {
    width: "100%",
    borderRadius: 5,
    height: "13rem",
    // [theme.breakpoints.down("sm")]: {
    //   maxHeight: "20vmax",
    // },
    // [theme.breakpoints.up("xl")]: {
    //   height: "13vmax",
    // },
  },
  cursor: {
    cursor: "pointer",
  },
  title: {
    textTransform: "capitalize",
    fontWeight: 500,
  },
}));

export default Products;
