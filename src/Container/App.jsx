import { Footer, Navbar, NotFound } from "../shared";
import { Home, Shop, SingleProduct, ShoppingCart } from "../Pages";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  makeStyles,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../shared/util/ScrollToTop";
import useFetch from "../shared/hooks/useFetch";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "../store/actions/filterActions";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop">
              <Shop isLoading={isLoading} error={error} />
            </Route>
            <Route path={"/products:id"} component={SingleProduct} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="*" component={NotFound} />
          </Switch>
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
