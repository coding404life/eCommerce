// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

import React from "react";
import GridOnOutlinedIcon from "@material-ui/icons/GridOnOutlined";
import ReorderOutlinedIcon from "@material-ui/icons/ReorderOutlined";

const TopBar = () => {
  const classes = useStyles();
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Box display="flex" px={8} py={3} alignItems="center">
      {/* <Button variant='contained'>Show Sidebar</Button> */}
      <Box mr={2}>
        <Button variant="contained" color="primary" className={classes.button}>
          <GridOnOutlinedIcon />
        </Button>
      </Box>
      <Box mr={2}>
        <Button className={classes.button} variant="contained">
          <ReorderOutlinedIcon />
        </Button>
      </Box>
      <Box flexGrow={1} />
      {/* menu sort items */}
      {/* <FormControl>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Default Sorting</em>
          </MenuItem>
          <MenuItem value={10}>Name (A - Z)</MenuItem>
          <MenuItem value={20}>Name (Z - A)</MenuItem>
          <MenuItem value={30}>Price (Highest)</MenuItem>
          <MenuItem value={40}>Price (Lowest)</MenuItem>
        </Select>
      </FormControl> */}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: 33,
    padding: 6,
  },
}));

export default TopBar;
