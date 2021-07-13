import { cartTypes } from "../action-types/cartTypes";

export const addTocart = (product) => {
  return {
    type: cartTypes.ADD_ITEM_TO_CART,
    payload: product,
  };
};

export const clearListHandler = () => {
  return {
    type: cartTypes.CLEAR_CART_FROM_ITEMS,
    payload: [],
  };
};

export const removeItemFromCart = (itemID) => {
  return {
    type: cartTypes.REMOVE_ITEM_FROM_CART,
    payload: itemID,
  };
};

export const editCartItem = (newProduct, amount) => {
  return {
    type: cartTypes.EDIT_ITEM_CART,
    payload: { newProduct, amount },
  };
};
