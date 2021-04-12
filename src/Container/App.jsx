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
import { CircularProgress, Grid } from '@material-ui/core';
import { useState } from 'react';

const App = () => {
    const classes = useStyles();
    const { data, isLoading, error } = useFetch('https://fakestoreapi.com/products');
    const [ cartItemsCount, setCartItemsCount ] = useState(0);
    const [ cartItemsList, setCartItemsList ] = useState([]);

    //adding items to the cart item
    const addTocartHandler = (item) => {
        const temp = [ ...cartItemsList ]
        temp.push(item)
        setCartItemsList(temp)
    }
    //clear the cart item
    const clearListHandler = () => {
        setCartItemsList([])
    }

    console.log(cartItemsList)
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <main className={classes.main}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/shop" >
                            <Shop data={data} isLoading={isLoading} error={error} addTocartHandler={addTocartHandler} />
                        </Route>
                        <Route path={'/products:id'} >
                            {isLoading ?
                                <Grid container justify='center'>
                                    <CircularProgress />
                                </Grid> :
                                <SingleProduct data={data} addItem={addTocartHandler} />
                            }
                        </Route>
                        <Route path="/cart"  >
                            <ShoppingCart cartItemsList={cartItemsList} clearListHandler={clearListHandler} />
                        </Route>
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
