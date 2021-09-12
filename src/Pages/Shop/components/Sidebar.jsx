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

const colors = ["#00ff00", "#0000ff", "#ff0000", "#000", "#ffb900"];
const category = [
  "",
  "living room",
  "office",
  "kitchen",
  "bedroom",
  "dining",
  "kids",
];

const Sidebar = () => {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const filter = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterColor(colors));
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
        {category.map((cat, index) => (
          <Button
            key={index}
            color="secondary"
            onClick={() => dispatch(filterCategory(cat))}
            variant={filter.category === cat ? "contained" : "text"}
            style={{ margin: "5px 0" }}
          >
            {cat === "" ? "all" : cat}
          </Button>
        ))}
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
        <Box className={classes.selectedColor}>
          <IconButton
            className={
              filter.color.constructor === Array
                ? classes.lineText
                : classes.allBtn
            }
            onClick={() => dispatch(filterColor(colors))}
          >
            ALL
          </IconButton>
          {colors.map((color, index) => {
            return (
              <IconButton
                key={index}
                className={classes.iconButton}
                style={{ backgroundColor: color }}
                onClick={() => dispatch(filterColor(color))}
              >
                {filter.color === color ? (
                  <CheckOutlinedIcon className={classes.checkIcon} />
                ) : null}
              </IconButton>
            );
          })}
        </Box>
      </Box>
      <Divider />
      <Box mt={1}>
        <Typography variant="h5">Price</Typography>
        <Box mb={1} pr={1}>
          <Typography id="range-slider" gutterBottom>
            Select Price Range:
          </Typography>
          <Slider
            value={filter.price}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            max={500000}
          />
          <Typography>
            {" "}
            Price is&nbsp;
            {formatPrice(filter.price)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(clearFilter(colors))}
          className={classes.responsiveButton}
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
    minWidth: "1rem",
    fontSize: "1.2rem",
  },
  checkIcon: {
    color: "#fff",
    fontSize: "1rem",
  },
  selectedColor: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.up("lg")]: {
      flexWrap: "nowrap",
    },
  },
  lineText: {
    minWidth: "1rem",
    fontSize: "1.2rem",
    textDecoration: "underline",
  },
  responsiveButton: {
    [theme.breakpoints.up("lg")]: {
      fontSize: ".9rem",
    },
    fontSize: ".8rem",
  },
}));

export default Sidebar;
