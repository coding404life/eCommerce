import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const SideDrawer = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button onClick={props.toggleDrawerHandler}>
        <MenuIcon className={classes.menuIcon} />
      </Button>
      <Drawer
        anchor="left"
        open={props.toggleDrawer}
        onClose={props.toggleDrawerHandler}
      >
        <Box className={classes.root}>{props.children}</Box>
      </Drawer>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "#303030",
    height: "100%",
    width: "30vmax",
    display: "flex",
    flexDirection: "column",
    padding: "2rem 1rem",
    textAlign: "center",
  },
  menuIcon: {
    color: "#fff",
  },
});
export default SideDrawer;
