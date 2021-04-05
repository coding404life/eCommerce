import { Box, makeStyles, Typography } from '@material-ui/core';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { formatPrice } from '../../../../components/common/Helper';
import { Link } from 'react-router-dom';

const Product = () => {
    const classes = useStyles();

    return (
        <Box display='flex' flexDirection='column' px={3} py={3} >
            <Box className={classes.container}>
                <img className={classes.imgStyle} src="https://picsum.photos/200/300" alt="https://picsum.photos/200/300" />
                <Link className={classes.searchIcon + ' show'} to='#'>
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
        borderRadius: 5,
        backgroundColor: '#222',
        '&:hover': {
            '& .show': {
                display: 'flex'
            },
            '& img': {
                opacity: .5,
                transition: 'all 0.3s linear',
            }
        }
    },
    searchIcon: {
        position: 'absolute',
        color: '#fff',
        cursor: 'pointer',
        width: theme.spacing(6),
        height: theme.spacing(6),
        borderRadius: '50%',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        opacity: 1
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
