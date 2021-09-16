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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const Home = React.lazy(() => import("../Pages/Home/index"));
const Shop = React.lazy(() => import("../Pages/Shop/Shop"));
const Auth = React.lazy(() => import("../shared/Auth/AuthForm"));
const SingleProduct = React.lazy(() => import("../Pages/Shop/SingleProduct"));
const ShoppingCart = React.lazy(() => import("../Pages/Cart/ShoppingCart"));
const NotFound = React.lazy(() => import("../shared/components/404/NotFound"));

// const calculateRemainingTime = (expirationTime) => expirationTime - Date.now();

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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKacoCVILsLiRrE_e_nLhY75S5LzUmam4",
  authDomain: "eren-commerce.firebaseapp.com",
  projectId: "eren-commerce",
  storageBucket: "eren-commerce.appspot.com",
  messagingSenderId: "929457248222",
  appId: "1:929457248222:web:b685529096402f03a7af4f",
  measurementId: "G-PQPNP9YLG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default App;
