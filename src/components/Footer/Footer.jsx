import { Box, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff',
    },
    footerHeading: {
        textTransform: 'uppercase',
        paddingLeft: '1em',
        zIndex: '1',
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 5,
            left: 0,
            width: '3px',
            height: '1.2rem',
            display: 'block',
            background: theme.palette.primary.main
        }
    },
    spacingLeft: {
        marginLeft: theme.spacing(1)
    },
    footerList: {
        padding: '0 1rem',
        '& li': {
            cursor: 'pointer',
            margin: '8px 0',
            '&:hover': {
                color: theme.palette.primary.main
            }
        }
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} py={10}>
            <Container>
                <Grid container justify='center' >
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h6' className={classes.footerHeading}>
                            <Box fontWeight='bold'>about store</Box>
                        </Typography>
                        <Box my={3}>
                            <Box display='flex' my={1}>
                                <HomeOutlinedIcon />
                                <Typography component='span' className={classes.spacingLeft}>123 soltana street</Typography>
                            </Box>
                            <Box display='flex' my={1}>
                                <PhoneOutlinedIcon />
                                <Typography component='span' className={classes.spacingLeft}>(800) 123 456 789</Typography>
                            </Box>
                            <Box display='flex' my={1}>
                                <MailOutlineOutlinedIcon />
                                <Typography component='span' className={classes.spacingLeft}>coding404life@gmail.com</Typography>
                            </Box>
                            <Box display='flex' >
                                <CreditCardOutlinedIcon className={classes.spacingLeft} />
                                <CreditCardOutlinedIcon className={classes.spacingLeft} />
                                <CreditCardOutlinedIcon className={classes.spacingLeft} />
                                <CreditCardOutlinedIcon className={classes.spacingLeft} />
                                <CreditCardOutlinedIcon className={classes.spacingLeft} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h6' className={classes.footerHeading}>
                            <Box fontWeight='bold'>my account</Box>
                        </Typography>
                        <Box display='flex' >
                            <ul className={classes.footerList}>
                                <li>My Account</li>
                                <li>Login</li>
                                <li>My Cart</li>
                                <li>Wishlist</li>
                                <li>Userinfer</li>
                                <li>Checkout</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h6' className={classes.footerHeading}>
                            <Box >information</Box>
                        </Typography>
                        <Box display='flex' >
                            <ul className={classes.footerList}>
                                <li>About us</li>
                                <li>Career</li>
                                <li>Delevary information</li>
                                <li>Privacy Policy</li>
                                <li>Terms &amp; Conditions</li>
                                <li>Sale Product</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h6' className={classes.footerHeading}>
                            <Box fontWeight='bold'>customer service</Box>
                        </Typography>
                        <Box display='flex' >
                            <ul className={classes.footerList}>
                                <li>Shipping Policy</li>
                                <li>Compensation First</li>
                                <li>My Account</li>
                                <li>Contact us</li>
                                <li>Shiping info</li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Footer
