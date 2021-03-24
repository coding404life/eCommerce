import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#303030',
        color: '#fff',
        padding: theme.spacing(1, 0)
    },
    logoIcon: {
        fontSize: '3rem',
        color: theme.palette.primary.main,

    },
    IconButton: {
        '& span': {
            color: '#fff'
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText
        }
    },
    button: {
        color: '#fff',
        '& a': {
            color: '#fff',
            textDecoration: 'none'
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText
        }
    },
    toolbar: {
        padding: '0'
    }
}));
export default useStyles