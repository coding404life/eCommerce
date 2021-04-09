import { Footer, Navbar, NotFound } from '../components';
import { Home, Shop, SingleProduct, ShoppingCart } from '../Pages'
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    makeStyles,
    unstable_createMuiStrictModeTheme as createMuiTheme
} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const App = () => {
    const classes = useStyles();
    const { data, isLoading, error } = useFetch('https://fakestoreapi.com/products');


    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <main className={classes.main}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/shop" >
                            <Shop data={data} isLoading={isLoading} error={error} />
                        </Route>
                        <Route path="/proudcts/:id" component={SingleProduct} />
                        <Route path="/cart" component={ShoppingCart} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#79B6C8",
        },
        secondary: {
            main: '#525252'
        }
    },
});

const useStyles = makeStyles({
    main: {
        minHeight: '55vh'
    }
});

export default App
