import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import bannerImg from "../../../assets/newsler.jpg";

const Banner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box textAlign="center" className={classes.textUpperCase} mb={3}>
        <Typography variant="h3">
          <Box fontWeight="300" lineHeight={1}>
            creative ideas
          </Box>
        </Typography>
        <Typography variant="h3" color="primary">
          <Box fontWeight="bold" lineHeight={1}>
            lighting furniture
          </Box>
        </Typography>
      </Box>
      <Typography variant="subtitle1">
        <Box mb={2}>We Have unique Furniture collection</Box>
      </Typography>
      <Button
        className={`${classes.textUpperCase} ${classes.collectionBtn}`}
        variant="outlined"
      >
        view collection
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bannerImg})`,
    minHeight: "40vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  textUpperCase: {
    textTransform: "uppercase",
  },
  collectionBtn: {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export default Banner;
