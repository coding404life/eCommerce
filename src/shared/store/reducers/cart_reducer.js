import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART_FROM_ITEMS,
  EDIT_ITEM_CART,
} from "../actions";

const cartReducer = (state = { cart: [], totalPrice: 0 }, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const Product = newState.cart.find(
        (product) => product.id === action.payload.id
      );
      //if Product is exist change the existing Product and add the new amount to it
      if (Product) {
        const existingProduct = {
          ...Product,
          amount: Product.amount + action.payload.amount,
          totalPrice: Product.totalPrice + action.payload.totalPrice,
        };
        const index = newState.cart.findIndex(
          (product) => product.id === Product.id
        );
        newState.cart.splice(index, 1, existingProduct);
      } else {
        //if product is not exist put it in the cart
        newState.cart.push(action.payload);
      }

      //calculate the TotalPrice
      newState.totalPrice = 0;
      newState.cart.forEach((el) => (newState.totalPrice += el.totalPrice));
      console.log(newState);

      return newState;

    case REMOVE_ITEM_FROM_CART:
      const arrWithoutTheRemovedItem = newState.cart.filter(
        (item) => item.id !== action.payload.id
      );
      newState.cart = arrWithoutTheRemovedItem;
      newState.totalPrice = newState.totalPrice - action.payload.totalPrice;

      console.log(newState, action.payload.totalPrice);
      return newState;

    case CLEAR_CART_FROM_ITEMS:
      return { ...state, cart: [], totalPrice: 0 };

    case EDIT_ITEM_CART:
      const { newProduct, amount } = action.payload;
      //1. change the product amount and totalPrice
      const editedProduct = {
        ...newProduct,
        amount: amount,
        totalPrice: amount * newProduct.price,
      };
      //2. find the index of the edited product and replace it with the newProduct
      const index = newState.cart.findIndex(
        (product) => product.id === newProduct.id
      );
      newState.cart.splice(index, 1, editedProduct);
      //3. calculate the TotalPrice
      newState.totalPrice = 0;
      newState.cart.forEach((el) => (newState.totalPrice += el.totalPrice));

      return newState;

    default:
      return state;
  }
};

export default cartReducer;
