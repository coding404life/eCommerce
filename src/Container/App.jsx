import { Navbar } from '../components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Home from '../components/Pages/Home/Home';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#79B6C8",
        },
        secondary: {
            main: '#525252'
        }
    }

})

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <main>
                    <Home />
                </main>
            </ThemeProvider>
        </>
    )
}

export default App
