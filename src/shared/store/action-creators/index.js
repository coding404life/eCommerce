import {
  EDIT_ITEM_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART_FROM_ITEMS,
} from "../actions";

export const addTocart = (product) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: product,
  };
};

export const clearListHandler = () => {
  return {
    type: CLEAR_CART_FROM_ITEMS,
    payload: [],
  };
};

export const removeItemFromCart = (itemID) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: itemID,
  };
};

export const editCartItem = (newProduct, amount) => {
  return {
    type: EDIT_ITEM_CART,
    payload: { newProduct, amount },
  };
};
