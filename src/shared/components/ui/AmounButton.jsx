import { IconButton, Typography, makeStyles, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const AmounButton = ({ itemAmount, decreaseItemCount, increaseItemCount }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h5">
        <IconButton
          color="secondary"
          className={classes.iconsBG}
          onClick={decreaseItemCount}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="span"
          className={classes.productNumber}
        >
          {itemAmount}
        </Typography>
        <IconButton
          color="secondary"
          className={classes.iconsBG}
          onClick={increaseItemCount}
        >
          <AddIcon />
        </IconButton>
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
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
}));

export default AmounButton;
