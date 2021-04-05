import { Box, makeStyles, Typography } from '@material-ui/core';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { formatPrice } from '../../../../components/common/Helper';
import { Link } from 'react-router-dom';
import chairImg from '../../../../assets/products/product-3.png';

const Product = () => {
    const classes = useStyles();

    return (
        <Box display='flex' flexDirection='column' px={3} py={3} style={{ transition: 'all 0.3s linear' }} >
            <Box className={classes.container}>
                <div className={classes.overlay + ' overlay'}></div>
                <img className={classes.imgStyle} src={chairImg} alt="https://picsum.photos/200/300" />
                <Link className={classes.searchIcon + ' show'} to='SingleProduct'>
                    <SearchOutlinedIcon />
                </Link>
            </Box>
            <Box display='flex' justifyContent='space-between' mt={3}>
                <Typography>Specify chair design</Typography>
                <LocalMallOutlinedIcon className={classes.cursor} />
            </Box>
            <Typography variant='h6' color='primary'>
                <Box fontWeight='700'>{formatPrice(1720)}</Box>
            </Typography>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        '&:hover': {
            '& .show': {
                opacity: 1,
            },
            '& .overlay': {
                opacity: .6,
            }
        }
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 10,
        backgroundColor: '#333',
        opacity: 0,
        zIndex: 100,
        transition: 'all 0.3s linear'
    },
    searchIcon: {
        position: 'absolute',
        color: '#fff',
        cursor: 'pointer',
        width: theme.spacing(6),
        height: theme.spacing(6),
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        opacity: 0,
        zIndex: 200
    },
    imgStyle: {
        width: '100%',
        borderRadius: 5,
    },
    cursor: {
        cursor: 'pointer'
    }
}));

export default Product
