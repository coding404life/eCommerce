import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "../shared";
import Auth from "../shared/Auth/AuthForm";
import {
  makeStyles,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import ScrollToTop from "../shared/util/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "../store/actions/filterActions";
import { logout, setLoginState } from "../store/actions/authActions";
import { firebaseAnlytics, firebasePerformance } from "../shared/util/firebase";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CssBaseline from "@material-ui/core/CssBaseline";
import useFetch from "../shared/hooks/useFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import { retriveStoredToken } from "../shared/util/authUtil";

//lazy loading pages
const Home = React.lazy(() => import("../Pages/Home/index"));
const Shop = React.lazy(() => import("../Pages/Shop/Shop"));
const About = React.lazy(() => import("../Pages/About/About"));
const SingleProduct = React.lazy(() => import("../Pages/Shop/SingleProduct"));
const ShoppingCart = React.lazy(() => import("../Pages/Cart/ShoppingCart"));
const NotFound = React.lazy(() => import("../shared/components/404/NotFound"));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const tokenData = retriveStoredToken();

  const { data, isLoading, error } = useFetch(
    "https://course-api.com/react-store-products"
  );

  useEffect(() => {
    //load products into redux store
    dispatch(loadProducts(data));
    // init firebase Performance SDK
    firebaseAnlytics();
    firebasePerformance();

    let timer;
    if (tokenData) {
      dispatch(setLoginState(tokenData.token));
      timer = setTimeout(() => dispatch(logout()), tokenData.duration);
    }

    return () => clearTimeout(timer);
  }, [data, dispatch, tokenData]);

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
              <Route exact path="/about" component={About} />
              <Route path={"/products:id"} component={SingleProduct} />
              <Route path="/cart" component={ShoppingCart} />
              {!isLoggedIn && (
                <Route path="/auth">
                  <Auth />
                </Route>
              )}
              {isLoggedIn && (
                <Route path="/checkout">
                  <CheckOut />
                </Route>
              )}
              {isLoggedIn && (
                <Route path="*">
                  <Redirect to="/" />
                </Route>
              )}
              {!isLoggedIn && <Route path="*" component={NotFound} />}
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
