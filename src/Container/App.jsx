import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "../shared";
import {
  makeStyles,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import ScrollToTop from "../shared/util/ScrollToTop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "../store/actions/filterActions";
import CssBaseline from "@material-ui/core/CssBaseline";
import useFetch from "../shared/hooks/useFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const Shop = React.lazy(() => import("../Pages/Shop/pages/Shop"));
const Auth = React.lazy(() => import("../Auth/AuthForm"));
const SingleProduct = React.lazy(() =>
  import("../Pages/Shop/pages/SingleProduct")
);
const ShoppingCart = React.lazy(() => import("../Pages/Cart/ShoppingCart"));
const NotFound = React.lazy(() => import("../shared/components/404/NotFound"));

const App = () => {
  const classes = useStyles();
  const disptach = useDispatch();

  const { data, isLoading, error } = useFetch(
    "https://course-api.com/react-store-products"
  );

  useEffect(() => {
    disptach(loadProducts(data));
  }, [data, disptach]);

  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main className={classes.main}>
          <Suspense
            fallback={
              <Grid container justify="center" alignItems="center">
                <CircularProgress />
              </Grid>
            }
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shop">
                <Shop isLoading={isLoading} error={error} />
              </Route>
              <Route path={"/products:id"} component={SingleProduct} />
              <Route path="/cart" component={ShoppingCart} />
              <Route path="/auth" component={Auth} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#79B6C8",
    },
    secondary: {
      main: "#525252",
    },
  },
});

const useStyles = makeStyles({
  main: {
    minHeight: "55vh",
  },
});

export default App;
