import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import TopBar from "../components/TopBar";
import { Box, CircularProgress, Container, Grid } from "@material-ui/core";
import { Banner, BreadCrumb } from "../../../shared";
import { useProductContextProvider } from "../../../shared/context/ProductContext";
import { useFilterContext } from "../../../shared/context/FilterContext";

const Shop = () => {
  const { addTocart } = useProductContextProvider();
  const { data, isLoading } = useFilterContext();

  return (
    <Box mb={5}>
      <Banner />
      <Container>
        <BreadCrumb thisRoute="shop" />
        <Box mt={4}>
          <Grid container>
            <Grid item xs={12} sm={2}>
              <Sidebar data />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TopBar />
              <Box px={5}>
                <Grid container justify="space-between" alignItems="center">
                  {isLoading && (
                    <Grid container justify="center">
                      <CircularProgress />
                    </Grid>
                  )}
                  {/* Start loop throught items from API */}
                  {data.map((product) => (
                    <Grid item xs={12} sm={4} key={product.id}>
                      <Products
                        data={product}
                        isloading={isLoading}
                        addTocartHandler={addTocart}
                      />
                    </Grid>
                  ))}
                  {/* End loop throught items from API */}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Shop;
