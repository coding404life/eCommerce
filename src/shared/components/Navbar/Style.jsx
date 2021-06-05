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
        padding: '0',
        marginLeft: theme.spacing(1),
        '& a': {
            color: '#fff',
            textDecoration: 'none',
            width: '100%',
            padding: '6px 8px'
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