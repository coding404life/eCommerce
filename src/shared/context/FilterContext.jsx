import useFetch from "../hooks/useFetch";
import filterReducer from "./reducers/filter_reducer";
import { useContext, useReducer, createContext } from "react";
import { FILTER_INPUT } from "./actions";
const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  //1. fetch data
  const { data, isLoading } = useFetch(
    "https://course-api.com/react-store-products"
  );

  //2.reducer function
  const [state, dispatch] = useReducer(filterReducer, {
    inputText: "",
    filteredData: [],
  });

  //3. filter data from input filed
  const newArr = data.filter((product) =>
    product.name.includes(state.inputText)
  );
  // console.log(newArr);

  //4. function to get the input data
  const filterInput = (inputData) => {
    dispatch({
      type: FILTER_INPUT,
      payload: inputData,
    });
  };

  return (
    <FilterContext.Provider value={{ data: newArr, filterInput, isLoading }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
