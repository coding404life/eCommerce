import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff',
        [ theme.breakpoints.down('sm') ]: {
            textAlign: 'center'
        }
    },
    footerHeading: {
        textTransform: 'uppercase',
        paddingLeft: '1em',
        zIndex: '1',
        position: 'relative',
        [ theme.breakpoints.down('sm') ]: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 5,
            left: 0,
            width: '3px',
            height: '1.2rem',
            display: 'block',
            background: theme.palette.primary.main,
            [ theme.breakpoints.down('sm') ]: {
                position: 'relative',
                bottom: -5,
                left: -10
            },
        }
    },
    spacingLeft: {
        marginLeft: theme.spacing(1)
    },
    footerList: {
        padding: '0 1rem',
        [ theme.breakpoints.down('sm') ]: {
            listStyle: 'none'
        },
        '& li': {
            cursor: 'pointer',
            margin: '8px 0',
            '&:hover': {
                color: theme.palette.primary.main
            }
        }
    },
    boxResponsiveStyles: {
        [ theme.breakpoints.down('sm') ]: {
            display: 'flex',
            justifyContent: 'center',
        }
    },
    boxScreenCenter: {
        [ theme.breakpoints.down('sm') ]: {
            justifyContent: 'center',
        }
    }
}));

export default useStyles
