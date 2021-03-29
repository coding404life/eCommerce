import { Box, Breadcrumbs, Container, Grid, Typography, makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom";
import Banner from '../../common/Banner';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4)
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
                    <Typography className={classes.activeMenu}>Shoes</Typography>
                </Breadcrumbs>
                <Grid container>
                    <Grid item >

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Shop
