import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Banner, BreadCrumb } from "../../shared";
import { useSelector } from "react-redux";

const Shop = ({ isLoading, error }) => {
  const filterState = useSelector((state) => state.filterReducer);

  return (
    <Box mb={5}>
      <Banner />
      <Container>
        <BreadCrumb thisRoute="shop" />
        <Box mt={4}>
          <Grid container>
            <Grid item xs={12} sm={2}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Grid
                container
                justify={isLoading ? "center" : "space-between"}
                alignItems="center"
              >
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
                            Products Not Found
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
                  filterState.filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} lg={4} key={product.id}>
                      <Products data={product} isloading={isLoading} />
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Shop;
