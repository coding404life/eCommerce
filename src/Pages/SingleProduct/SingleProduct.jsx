import { Box, Button, Container, Divider, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import BreadCrumb from '../../components/common/BreadCrumb';
import chairImg from '../../assets/products/product-3.png';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { formatPrice } from '../../components/common/Helper'
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const classes = useStyles();
    const [ count, setCount ] = useState(0)
    const arr = [ 'red', 'green', 'purple' ];
    return (
        <Box>
            <Container>
                <BreadCrumb thisRoute='Spacing chair design' />
                <Grid container justify='space-between' className={classes.root}>
                    <Grid item sm={6} xs={12} >
                        <Box className={classes.productImgContainer}>
                            <img src={chairImg} alt="chair" className={classes.productImg} />
                        </Box>
                        <Box display='flex' my={3} justifyContent='center'>
                            <img src={chairImg} alt="chair" className={classes.subImg} />
                            <img src={chairImg} alt="chair" className={classes.subImg} />
                            <img src={chairImg} alt="chair" className={classes.subImg} />
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Box mb={4}>
                            <Typography variant='h5'>
                                <Box fontWeight='bold' mb={4}>Spacing chair design</Box>
                            </Typography>
                            <Typography varinat='subtitle1' color='textSecondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi praesentium quasi maxime unde asperiores ullam quaerat incidunt! Voluptas molestias reiciendis, quos, dolorum voluptatem, minus iusto voluptatibus beatae officia velit eaque?</Typography>
                            <Typography variant='h6' color='primary'>
                                <Box fontWeight='bold' mt={1}>{formatPrice(330)}</Box>
                            </Typography>
                        </Box>
                        <Box display='flex' mb={4}>
                            <Box mr={3}>
                                <Typography variant='h6'>
                                    <Box mb={1}>Available:</Box>
                                    <Box mb={1}>Category:</Box>
                                    <Box mb={1}>Brand:</Box>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='h6' color='textSecondary'>
                                    <Box mb={1} fontWeight='normal'>inStock</Box>
                                    <Box mb={1} fontWeight='normal'>jewelery</Box>
                                    <Box mb={1} fontWeight='normal'>Ikea</Box>
                                </Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <Box display='flex' mt={4} >
                            <Box mr={3}>
                                <Typography variant='h6'>Color: </Typography>
                            </Box>
                            <Box className={classes.colorWrapper}>
                                {arr.map((color, index) => {
                                    return <IconButton
                                        key={index}
                                        className={classes.iconButton}
                                        style={{ backgroundColor: color }}
                                    >
                                        <CheckOutlinedIcon className={classes.checkIcon} />
                                    </IconButton>
                                })}
                            </Box>
                        </Box>
                        <Box mt={4}>
                            <IconButton
                                color='secondary'
                                className={classes.iconsBG}
                                onClick={() => setCount(count - 1)}
                            >
                                <RemoveIcon />
                            </IconButton>
                            <Typography variant='h5' component='span' className={classes.productNumber}>
                                {count >= 0 ? count : setCount(0)}
                            </Typography>
                            <IconButton
                                color='secondary'
                                className={classes.iconsBG}
                                onClick={() => setCount(count + 1)}
                            >
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <Box mt={3}>
                            <Link to='cart' style={{ textDecoration: 'none' }}>
                                <Button variant='contained' color='secondary'>add to cart</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

//styles
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    productImgContainer: {
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 2rem'
    },
    productImg: {
        maxWidth: '100%'
    },
    subImg: {
        backgroundColor: '#f5f5f5',
        width: '10vmax',
        height: '10vmax',
        margin: `0 1rem`
    },
    iconButton: {
        backgroundColor: '#f00',
        width: '1rem',
        height: '1rem',
        marginRight: '.3rem',
        display: 'flex !important',
    },
    checkIcon: {
        color: '#fff',
        fontSize: '1rem'
    },
    colorWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    productNumber: {
        padding: '0 .6rem'
    },
    iconsBG: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: '#fff'
        }
    }
}));

export default SingleProduct
