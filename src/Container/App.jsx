import { Footer, Navbar, Home, Shop, NotFound } from '../components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

export default App
