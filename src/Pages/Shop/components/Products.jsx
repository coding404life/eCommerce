import { Box, makeStyles, Typography } from "@material-ui/core";
// import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { formatPrice } from "../../../shared/util/formatPrice";
import { Link } from "react-router-dom";
import React from "react";

const Products = (props) => {
  const { data } = props;
  const classes = useStyles();
  const title = data.title.slice(0, 29);

  return (
    <Box
      id={data.id}
      px={3}
      py={3}
      display="flex"
      flexDirection="column"
      style={{ transition: "all 0.3s linear" }}
    >
      <Box className={classes.container}>
        <div className={classes.overlay + " overlay"}></div>
        <img
          className={classes.imgStyle}
          src={data.image}
          alt="https://picsum.photos/200/300"
        />
        <Link
          className={classes.searchIcon + " show"}
          to={`/products:${data.id}`}
        >
          <SearchOutlinedIcon />
        </Link>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Typography>{title}</Typography>
        {/* <LocalMallOutlinedIcon
          className={classes.cursor}
          onClick={() => addTocartHandler(data)}
        /> */}
      </Box>
      <Typography variant="h6" color="primary">
        <Box fontWeight="700">{formatPrice(data.price)}</Box>
      </Typography>
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
    height: "20vmax",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "25vmax",
    },
  },
  cursor: {
    cursor: "pointer",
  },
}));

export default Products;
