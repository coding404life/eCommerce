import { Breadcrumbs, Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = ({ thisRoute }) => {
    const classes = useStyles()
    return (
        <div>
            <Breadcrumbs className={classes.root} aria-label="breadcrumb">
                <Link className={classes.linkItems} to="/" >Home</Link>
                {
                    thisRoute !== 'shop' &&
                    <Link className={classes.linkItems} color="inherit" to="/shop">Shop</Link>
                }
                <Typography className={classes.activeMenu}>{thisRoute}</Typography>
            </Breadcrumbs>
            <Divider />
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    linkItems: {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
    },
    activeMenu: {
        color: theme.palette.primary.main
    }
}));


export default BreadCrumb
