import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import productOne from "../../../assets/products/product-1.png";
import productTwo from "../../../assets/products/product-2.png";
import productThree from "../../../assets/products/product-3.png";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    maxHeight: "10rem",
  },
  textUpper: {
    textTransform: "uppercase",
  },
  textCapitalize: {
    textTransform: "capitalize",
  },
}));

const Card = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper>
        <Box
          display="flex"
          alignItems="center"
          py={3}
          justifyContent="space-around"
        >
          <img className={classes.img} src={props.imageSrc} alt="product" />
          <Box>
            <Typography variant="h6" className={classes.textUpper}>
              <Box fontWeight="bold" lineHeight={1}>
                {props.name}
              </Box>
              <Box fontWeight="bold">{props.discreption}</Box>
            </Typography>
            <Typography
              component="span"
              className={classes.textCapitalize}
              color="textSecondary"
            >
              <Box py={1}>{props.productName}</Box>
            </Typography>
            <Typography variant="h6" color="primary">
              <Box>From: ${props.price}</Box>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

const Cards = () => {
  const items = [
    {
      img: productOne,
      name: "eren",
      discreption: "home deco",
      productName: "creative home dico ideal",
      price: "186",
    },
    {
      img: productTwo,
      name: "mega sale",
      discreption: "off up to",
      productName: "Lamp &amp; Lighting",
      price: "229",
    },
    {
      img: productThree,
      name: "creative",
      discreption: "table design",
      productName: "Tables &amp; charis",
      price: "122",
    },
  ];
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              imageSrc={item.img}
              name={item.name}
              discreption={item.discreption}
              productName={item.productName}
              price={item.price}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Cards;
