import { Box, Button, makeStyles, Menu, MenuItem } from '@material-ui/core'
import React from 'react'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

const TopBar = () => {
    const classes = useStyles();
    const [ anchorEl, setAnchorEl ] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box display='flex' mt={3}>
            <Button variant='contained'>Show Sidebar</Button>
            <Box mx={2}>
                <Button
                    variant='contained'
                    color='primary'
                    className={classes.button}
                >
                    <GridOnOutlinedIcon />
                </Button>
            </Box>
            <Box mr={2}>
                <Button className={classes.button} variant='contained'>
                    <ReorderOutlinedIcon />
                </Button>
            </Box>
            <Button variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Default Sorting <ArrowDropDownOutlinedIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>From A to Z</MenuItem>
                <MenuItem onClick={handleClose}>From Z to A</MenuItem>
                <MenuItem onClick={handleClose}>From High to low</MenuItem>
                <MenuItem onClick={handleClose}>From Low to High</MenuItem>
            </Menu>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    button: {
        minWidth: 33,
        padding: 6,
    }
}));

export default TopBar
