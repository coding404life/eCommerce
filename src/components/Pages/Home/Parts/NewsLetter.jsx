import { Box, Input, InputAdornment, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import NewsLetterBg from '../../../../assets/news-letter.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${NewsLetterBg})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundAttachment: 'fixed',
        height: '45vh',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    upperCase: {
        textTransform: 'uppercase'
    },
    textField: {
        padding: theme.spacing(1),
        backgroundColor: 'inherit',
        border: '1px solid #444',
        borderRadius: '3px',
        width: '100%'
    },
    form: {
        width: '40vw'
    },
    sendIcon:{
        cursor:'pointer'
    }
}))
const NewsLetter = () => {
    const classes = useStyles();
    return (
        <Box my={10} py={4} className={classes.root}>
            <Typography variant='h5'>
                <Box fontWeight='bold' className={classes.upperCase}>Sign up to news letter</Box>
            </Typography>
            <Box width='40%' textAlign="center" mt={1} mb={5}>
                <Typography component='span' color='textSecondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur esse inventore vero dolore, quos quod alias delectus sunt magnam ex.</Typography>
            </Box>
            <form className={classes.form}>
                <Input type="text" className={classes.textField} 
                    endAdornment={
                        <InputAdornment position="end">
                            <SendOutlinedIcon className={classes.sendIcon} />
                        </InputAdornment>
                    }
                    placeholder='subscribe to our news letter' />
            </form>
        </Box>
    )
}

export default NewsLetter
