import { Box, Container, Grid, Typography } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import useStyles from './Styles'

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} py={10} component='footer'>
            <Container>
                <Grid container justify='center' >
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h6' className={classes.footerHeading}>
                            <Box fontWeight='bold'>about store</Box>
                        </Typography>
                        <Box my={3} className={classes.smallScreenCenter}>
                            <Box display='flex' my={1} className={classes.boxScreenCenter}>
                                <HomeOutlinedIcon />
                                <Typography component='span' className={classes.spacingLeft}>123 soltana street</Typography>
                            </Box>
                            <Box display='flex' my={1} className={classes.boxScreenCenter}>
                                <PhoneOutlinedIcon />
                                <Typography component='span' className={classes.spacingLeft}>(800) 123 456 789</Typography>
                            </Box>
                            <Box display='flex' my={1} className={classes.boxScreenCenter}>
                                <MailOutlineOutlinedIcon />
                                <Typography component='span' className={classes.spacingLeft}>coding404life@gmail.com</Typography>
                            </Box>
                            <Box display='flex' className={classes.boxScreenCenter}>
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
                        <Box className={classes.boxResponsiveStyles}>
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
                        <Box className={classes.boxResponsiveStyles} >
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
                        <Box className={classes.boxResponsiveStyles} >
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
