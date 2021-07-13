import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import React from "react";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { formatPrice } from "../../../shared/util/formatPrice";
import { FormControl } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { inputValue } from "../../../store/actions/filterActions";

const arr = ["red", "green", "purple", "deeppink", "orange"];

const Sidebar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 5000]);
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt={1} className={classes.root}>
      <Box className={classes.searchInput}>
        <TextField
          label="Search input"
          margin="dense"
          variant="outlined"
          onChange={(e) =>
            dispatch(inputValue(e.target.value.toLowerCase().trim()))
          }
        />
      </Box>
      <Box>
        <Typography variant="h5">Categories</Typography>
        <Button>All</Button>
        <Button>living room</Button>
        <Button>office</Button>
        <Button>kitchen</Button>
        <Button>bedroom</Button>
        <Button>dining</Button>
        <Button>kids</Button>
      </Box>
      <Divider />
      <Box my={1}>
        <Typography variant="h5">Company</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Company
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="ALL">ALL</MenuItem>
            <MenuItem value="Marcos">Marcos</MenuItem>
            <MenuItem value="Liddy">Liddy</MenuItem>
            <MenuItem value="Ikea">Ikea</MenuItem>
            <MenuItem value="Caressa">Caressa</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider />
      <Box my={1}>
        <Typography variant="h5">Colors</Typography>
        <Box className={classes.colorWrapper}>
          <IconButton className={classes.allBtn}>ALL</IconButton>
          {arr.map((color, index) => {
            return (
              <IconButton
                key={index}
                className={classes.iconButton}
                style={{ backgroundColor: color }}
              >
                <CheckOutlinedIcon className={classes.checkIcon} />
              </IconButton>
            );
          })}
        </Box>
      </Box>
      <Divider />
      <Box mt={1}>
        <Typography variant="h5">Price</Typography>
        <Box mb={1}>
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
          <Typography>
            {" "}
            Your range of Price is between <br /> {formatPrice(value[0])} / and{" "}
            {formatPrice(value[1])}
          </Typography>
        </Box>
        <Button variant="contained" color="secondary">
          Clear Filter
        </Button>
      </Box>
    </Box>
  );
};

//sidebar styles :)
const useStyles = makeStyles((theme) => ({
  root: {
    "& button": {
      textAlign: "left",
      display: "block",
    },
    position: "sticky",
    top: 0,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  iconButton: {
    width: "1rem",
    height: "1rem",
    marginRight: ".3rem",
    display: "flex !important",
    [theme.breakpoints.down("md")]: {
      marginBottom: ".5rem",
    },
  },
  allBtn: {
    width: "4vmax",
    fontSize: "1.2rem",
  },
  checkIcon: {
    color: "#fff",
    fontSize: "1rem",
  },
  colorWrapper: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    // padding: "10px 14px",
  },
}));

export default Sidebar;
