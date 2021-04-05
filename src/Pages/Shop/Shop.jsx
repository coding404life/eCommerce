import { Box, Breadcrumbs, Container, Grid, Typography, makeStyles, Divider } from "@material-ui/core"
import { Link } from "react-router-dom";
import Sidebar from './Parts/Sidebar';
import Product from './Parts/Products/Product';
import Banner from '../../components/common/Banner';
import TopBar from "./Parts/TopBar";

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
                            <Box px={5}>
                                <Grid container justify='space-between'>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Product />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box >
    )
}

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

export default Shop
