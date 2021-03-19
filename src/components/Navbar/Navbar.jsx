import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Badge, Hidden } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import useStyles from './Style';


const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Container>
                <Toolbar className={classes.toolbar}>
                    <Box display='flex' alignItems='center'>
                        <MenuOpenOutlinedIcon className={classes.logoIcon} />
                        <Typography variant="h4" >
                            <Box fontWeight="fontWeightBold">
                                EREN
                            </Box>
                        </Typography>
                    </Box>
                    <Box flexGrow={1} />
                    <Hidden smDown >
                        <Box>
                            <Button className={classes.button}>Home</Button>
                            <Button className={classes.button}>Shop</Button>
                            <Button className={classes.button}>About</Button>
                            <Button className={classes.button}>Contact</Button>
                        </Box>
                    </Hidden>
                    <Box>
                        <IconButton className={classes.IconButton} >
                            <SearchOutlinedIcon />
                        </IconButton>
                        <IconButton className={classes.IconButton}>
                            <Badge badgeContent={6} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;