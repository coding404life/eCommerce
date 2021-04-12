import { Box, Grid, Hidden, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { formatPrice } from '../../components/common/Helper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const CartItem = ({ cartItemsList }) => {
    const classes = useStyles();

    return (
        <>
            {cartItemsList.map(cur => {
                return (
                    <Grid container justify='space-between' alignItems='center'>
                        <Hidden xsDown>
                            <Grid item sm={1} md={2}>
                                <img className={classes.productImage} src={cur.image} alt="product" />
                            </Grid>
                            <Grid item sm={3} md={2}>
                                <Typography variant='subtitle1'>{cur.title}</Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant='subtitle1' color='primary'>
                                    <Box fontWeight='bold'>{formatPrice(cur.price)}</Box>
                                </Typography>
                            </Grid>
                        </Hidden>
                        <Hidden smUp>
                            <Grid container item xs={6} alignItems='center'>
                                <img className={classes.productImage} src={cur.image} alt="product" />
                                <Box>
                                    <Typography variant='subtitle1'>{cur.title}</Typography>
                                    <Typography variant='subtitle1' color='primary'>
                                        <Box fontWeight='bold'>{formatPrice(cur.price)}</Box>
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
                )
            })}
        </>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        textTransform: 'uppercase'
    },
    productImage: {
        maxWidth: '8vmax',
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
export default CartItem
