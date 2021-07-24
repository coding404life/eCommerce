import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { formatPrice } from "../../../shared/util/formatPrice";
import { FormControl } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  inputValue,
  filterCategory,
  filterCompany,
  filterPrice,
  filterColor,
  clearFilter,
} from "../../../store/actions/filterActions";
import { useEffect, useState } from "react";

const arr = ["#00ff00", "#0000ff", "#ff0000", "#000", "#ffb900"];

const Sidebar = () => {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const value = useSelector((state) => state.filterReducer.price);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterColor(arr));
  }, [dispatch]);

  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(filterCompany(event.target.value));
  };

  const handleSliderChange = (event, newValue) => {
    dispatch(filterPrice(newValue));
  };

  return (
    <Box mt={1} className={classes.root}>
      <Box className={classes.searchInput}>
        <TextField
          label="Search input"
          margin="dense"
          variant="outlined"
          onChange={(e) => dispatch(inputValue(e.target.value))}
        />
      </Box>
      <Box>
        <Typography variant="h5">Categories</Typography>
        <Button onClick={() => dispatch(filterCategory(""))}>All</Button>
        <Button onClick={() => dispatch(filterCategory("living room"))}>
          living room
        </Button>
        <Button onClick={() => dispatch(filterCategory("office"))}>
          office
        </Button>
        <Button onClick={() => dispatch(filterCategory("kitchen"))}>
          kitchen
        </Button>
        <Button onClick={() => dispatch(filterCategory("bedroom"))}>
          bedroom
        </Button>
        <Button onClick={() => dispatch(filterCategory("dining"))}>
          dining
        </Button>
        <Button onClick={() => dispatch(filterCategory("kids"))}>kids</Button>
      </Box>
      <Divider />
      <Box my={1}>
        <Typography variant="h5">Company</Typography>
        <FormControl className={classes.formControl}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <span>ALL</span>{" "}
            </MenuItem>
            <MenuItem value="marcos">Marcos</MenuItem>
            <MenuItem value="liddy">Liddy</MenuItem>
            <MenuItem value="ikea">Ikea</MenuItem>
            <MenuItem value="caressa">Caressa</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider />
      <Box my={1}>
        <Typography variant="h5">Colors</Typography>
        <Box className={classes.colorWrapper}>
          <IconButton
            className={classes.allBtn}
            onClick={() => dispatch(filterColor(arr))}
          >
            ALL
          </IconButton>
          {arr.map((color, index) => {
            return (
              <IconButton
                key={index}
                className={classes.iconButton}
                style={{ backgroundColor: color }}
                onClick={() => dispatch(filterColor(color))}
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
            max={500000}
          />
          <Typography>
            {" "}
            Price is&nbsp;
            {formatPrice(value)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(clearFilter(arr))}
        >
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
}));

export default Sidebar;
