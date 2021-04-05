import { Footer, Navbar, NotFound } from '../components';
import { Home, Shop, SingleProduct, Cart } from '../Pages'
import CssBaseline from '@material-ui/core/CssBaseline';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/SingleProduct" component={SingleProduct} />
                        <Route path="/cart" component={Cart} />
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
})
export default App
