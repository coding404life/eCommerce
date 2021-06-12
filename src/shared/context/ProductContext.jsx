import React, {
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";
import cartReducer from "./reducers/product_reducer";

import {
  EDIT_ITEM_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART_FROM_ITEMS,
} from "./actions";

const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  // console.log(state.cart);

  //adding items to the cart item
  const addTocart = useCallback((item) => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: item,
    });
  }, []);

  //clear the cart item
  const clearListHandler = useCallback(() => {
    dispatch({
      type: CLEAR_CART_FROM_ITEMS,
      payload: [],
    });
  }, []);

  //remove item from the cart
  const removeItemFromCart = useCallback((itemID) => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: itemID,
    });
  }, []);

  // edit the whole cart with new one
  const editCart = useCallback((newCart) => {
    dispatch({
      type: EDIT_ITEM_CART,
      payload: newCart,
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        cart: state.cart,
        addTocart,
        removeItemFromCart,
        clearListHandler,
        editCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProductContextProvider = () => {
  return useContext(ProductContext);
};
