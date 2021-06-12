import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART_FROM_ITEMS,
  EDIT_ITEM_CART,
} from "../actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const product = action.payload;

      const itemCart = state.cart.find((item) => item.id === product.id);

      if (itemCart) {
        const newItem = {
          ...itemCart,
          amount: itemCart.amount + product.amount,
        };
        const itemIndex = state.cart.findIndex((el) => el.id === product.id);
        state.cart[itemIndex] = newItem;

        return {
          cart: state.cart,
        };
      }

      return {
        cart: [...state.cart, action.payload],
      };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case CLEAR_CART_FROM_ITEMS:
      return {
        ...state,
        cart: action.payload,
      };

    case EDIT_ITEM_CART:
      const changedProductAmount = action.payload;

      const itemIndex = state.cart.findIndex(
        (el) => el.id === changedProductAmount.id
      );
      state.cart[itemIndex] = changedProductAmount;

      return {
        cart: state.cart,
      };

    default:
      return state;
  }
};

export default cartReducer;
