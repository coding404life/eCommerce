import { Box, Breadcrumbs, Container, Grid, Typography, makeStyles, Divider } from "@material-ui/core"
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import Product from './products/Product';
import Banner from '../../common/Banner';
import TopBar from "./TopBar";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    linkItems: {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
    },
    activeMenu: {
        color: theme.palette.primary.main
    }
}));

const Shop = () => {
    const classes = useStyles();

    return (
        <Box mb={5}>
            <Banner />
            <Container>
                <Breadcrumbs className={classes.root} aria-label="breadcrumb">
                    <Link className={classes.linkItems} to="/" >Home</Link>
                    <Link className={classes.linkItems} color="inherit" to="/shop">Shop</Link>
                    <Typography className={classes.activeMenu}>All</Typography>
                </Breadcrumbs>
                <Divider />
                <Box mt={4}>
                    <Grid container>
                        <Grid item xs={12} sm={2}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TopBar />
                            <Product />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Shop
