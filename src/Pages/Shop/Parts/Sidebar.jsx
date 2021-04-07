import { Box, Button, Divider, IconButton, makeStyles, Slider, TextField, Typography } from '@material-ui/core'
import React from 'react'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { formatPrice } from '../../../components/common/Helper';

const Sidebar = () => {
    const classes = useStyles();
    const [ value, setValue ] = React.useState([ 0, 5000 ]);
    const arr = [ 'red', 'green', 'purple', 'deeppink', 'orange' ];

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box mt={1} className={classes.root}>
            <Box mb={2}>
                <TextField
                    label="Search input"
                    margin="normal"
                    variant="outlined"
                />
            </Box>
            <Box>
                <Typography variant='h5'>Categories</Typography>
                <Button>All</Button>
                <Button>Office</Button>
                <Button>Living Room</Button>
                <Button>Kitichen</Button>
                <Button>Bedroom</Button>
                <Button>Dining</Button>
                <Button>Kids</Button>
            </Box>
            <Divider />
            <Box my={3}>
                <Typography variant='h5'>Company</Typography>
                <Button>ikea</Button>
                <Button>Marcos</Button>
                <Button>Liddy</Button>
                <Button>Caressa</Button>
                <Button>Chanel</Button>
                <Button>Gucci</Button>
            </Box>
            <Divider />
            <Box my={3}>
                <Typography variant='h5'>Colors</Typography>
                <Box className={classes.colorWrapper}>
                    <Button>All</Button>
                    {arr.map((color, index) => {
                        return <IconButton
                            key={index}
                            className={classes.iconButton}
                            style={{ backgroundColor: color }}
                        >
                            <CheckOutlinedIcon className={classes.checkIcon} />
                        </IconButton>
                    })}
                </Box>
            </Box>
            <Divider />
            <Box mt={3}>
                <Typography variant='h5'>Price</Typography>
                <Box my={2}>
                    <Typography id="range-slider" gutterBottom>
                        Select Price Range:
                    </Typography>
                    <Slider
                        value={value}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        min={0}
                        max={5000}
                    />
                    <Typography> Your range of Price is between <br /> {formatPrice(value[ 0 ])} / and {formatPrice(value[ 1 ])}</Typography>
                </Box>
                <Button variant='contained' color='secondary'>Clear Filter</Button>
            </Box>
        </Box >
    )
}

//sidebar styles :)
const useStyles = makeStyles(theme => ({
    root: {
        '& button': {
            textAlign: 'left',
            display: 'block'
        }
    },
    iconButton: {
        backgroundColor: '#f00',
        width: '1rem',
        height: '1rem',
        marginRight: '.3rem',
        display: 'flex !important',
        [ theme.breakpoints.down('md') ]: {
            marginBottom: '.5rem'
        }
    },
    checkIcon: {
        color: '#fff',
        fontSize: '1rem'
    },
    colorWrapper: {
        display: 'flex',
        alignItems: 'center',
        [ theme.breakpoints.down('md') ]: {
            display: 'block',
            alignItems: 'left',
        }
    }
}));

export default Sidebar
