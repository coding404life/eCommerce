import { Box, Button, Container, Divider, Grid, Hidden, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BreadCrumb from '../../components/common/BreadCrumb';
import productImg from '../../assets/products/product-2.png';
import { formatPrice } from '../../components/common/Helper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    const classes = useStyles();

    return (
        <Container>
            <BreadCrumb thisRoute='Shopping Cart' />
            <Box my={4}>
                <Typography variant="h6">
                    <Box fontWeight='bold'>SHOPPING CART</Box>
                </Typography>
                <Hidden smDown>
                    <Box my={3} className={classes.root} >
                        <Grid container justify='space-between'>
                            <Grid container item sm={2}>
                                <Typography variant='h6'>Product photo</Typography>
                            </Grid>
                            <Grid container item sm={2}>
                                <Typography variant='h6'>product name</Typography>
                            </Grid>
                            <Grid container item sm={2}>
                                <Typography variant='h6'>price</Typography>
                            </Grid>
                            <Grid container item sm={2}>
                                <Typography variant='h6'>quantitiy</Typography>
                            </Grid>
                            <Grid container item sm={2}>
                                <Typography variant='h6'>total price</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                </Hidden>
                <Box my={3}>
                    <Grid container justify='space-between' alignItems='center'>
                        <Hidden xsDown>
                            <Grid item sm={1} md={2}>
                                <img className={classes.productImage} src={productImg} alt="product" />
                            </Grid>
                            <Grid item sm={3} md={2}>
                                <Typography variant='subtitle1'>Specify chair design</Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant='subtitle1' color='primary'>
                                    <Box fontWeight='bold'>{formatPrice(180)}</Box>
                                </Typography>
                            </Grid>
                        </Hidden>
                        <Hidden smUp>
                            <Grid container item xs={6} alignItems='center'>
                                <img className={classes.productImage} src={productImg} alt="product" />
                                <Box>
                                    <Typography variant='subtitle1'>Specify</Typography>
                                    <Typography variant='subtitle1' color='primary'>
                                        <Box fontWeight='bold'>{formatPrice(180)}</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Hidden>
                        <Grid item sm={3} md={2}>
                            <Typography variant='h5'>
                                <IconButton color='secondary' className={classes.iconsBG}>
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant='h5' component='span' className={classes.productNumber}>
                                    2
                                </Typography>
                                <IconButton color='secondary' className={classes.iconsBG}>
                                    <AddIcon />
                                </IconButton>
                            </Typography>
                        </Grid>
                        <Grid container item xs={1} sm={2} justify='space-between'>
                            <Hidden xsDown>
                                <Typography variant='subtitle1' color='primary'>
                                    <Box fontWeight='bold'>{formatPrice(360)}</Box>
                                </Typography>
                            </Hidden>
                            <DeleteIcon className={classes.closeIcon} />
                        </Grid>
                    </Grid>
                    <Divider />
                    <Box my={4} display='flex' justifyContent='space-between'>
                        <Link to='shop' style={{ textDecoration: 'none' }}>
                            <Button variant='contained' color='primary' className={classes.shoppingButtons}>
                                continue shopping</Button>
                        </Link>
                        <Button variant='contained' color='secondary'>clear shopping cart</Button>
                    </Box>
                    <Box my={4}>
                        <Grid container>
                            <Grid item md={8} sm={6}></Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='h6'>CART TOTALS</Typography>
                                <Box my={4}>
                                    <Box display='flex' justifyContent='space-between' mb={1} mt={3}>
                                        <Typography variant='h6'>Cart subtotal</Typography>
                                        <Typography variant='h6'>{formatPrice(350)}</Typography>
                                    </Box>
                                    <Divider />
                                    <Box display='flex' justifyContent='space-between' mb={1} mt={3}>
                                        <Typography variant='h6'>Shipping and handling</Typography>
                                        <Typography variant='h6'>{formatPrice(10)}</Typography>
                                    </Box>
                                    <Divider />
                                    <Box display='flex' justifyContent='space-between' mb={1} mt={3}>
                                        <Typography variant='h6'>Cart Totals</Typography>
                                        <Typography variant='h6' color='primary'>{formatPrice(360)}</Typography>
                                    </Box>
                                    <Divider />
                                </Box>
                                <Button variant='contained' color='primary' className={classes.shoppingButtons}>Proceed to checkout</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        textTransform: 'uppercase'
    },
    productImage: {
        maxWidth: '100%',
        height: '8vmax'
    },
    productNumber: {
        padding: '0 .5rem',
        [ theme.breakpoints.down('xs') ]: {
            padding: 0
        }
    },
    iconsBG: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: '#fff'
        }
    },
    closeIcon: {
        '& :hover': {
            color: theme.palette.primary.main,
            cursor: 'pointer'
        }
    },
    shoppingButtons: {
        color: '#fff'
    }
}));

export default ShoppingCart
