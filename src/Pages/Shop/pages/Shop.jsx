import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import TopBar from "../components/TopBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Banner, BreadCrumb } from "../../../shared";
import { useSelector } from "react-redux";

const Shop = (props) => {
  const { data, isLoading } = props;
  const inputValue = useSelector((state) => state.filterReducer.value);

  const result = data.filter((item) => {
    return item.name.includes(inputValue) || item.company.includes(inputValue);
  });

  console.log(inputValue);
  console.log(result);

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
              <TopBar />
              <Box px={5}>
                <Grid container justify="space-between" alignItems="center">
                  {isLoading && (
                    <Grid container justify="center">
                      <CircularProgress />
                    </Grid>
                  )}
                  {/* Start loop throught items from API */}
                  {result.map((product) => (
                    <Grid item xs={12} sm={4} key={product.id}>
                      <Products data={product} isloading={isLoading} />
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
