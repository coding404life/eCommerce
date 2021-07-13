import { cartTypes } from "../action-types/cartTypes";
import produce from "immer";

const cartReducer = (state = { cart: [], totalPrice: 0 }, { type, payload }) =>
  produce(state, (draftState) => {
    switch (type) {
      case cartTypes.ADD_ITEM_TO_CART:
        const Product = draftState.cart.find(
          (product) => product.id === payload.id
        );
        //if Product is exist change the existing Product and add the new amount to it
        if (Product) {
          const existingProduct = {
            ...Product,
            amount: Product.amount + payload.amount,
            totalPrice: Product.totalPrice + payload.totalPrice,
          };
          const index = draftState.cart.findIndex(
            (product) => product.id === Product.id
          );
          draftState.cart.splice(index, 1, existingProduct);
        } else {
          //if product is not exist put it in the cart
          draftState.cart.push(payload);
        }

        //calculate the TotalPrice
        draftState.totalPrice = 0;
        draftState.cart.forEach(
          (el) => (draftState.totalPrice += el.totalPrice)
        );

        return;

      case cartTypes.REMOVE_ITEM_FROM_CART:
        const arrWithoutTheRemovedItem = draftState.cart.filter(
          (item) => item.id !== payload.id
        );
        draftState.cart = arrWithoutTheRemovedItem;
        draftState.totalPrice = draftState.totalPrice - payload.totalPrice;

        // console.log(draftState, payload.totalPrice);
        return;

      case cartTypes.CLEAR_CART_FROM_ITEMS:
        return { ...draftState, cart: [], totalPrice: 0 };

      case cartTypes.EDIT_ITEM_CART:
        const { newProduct, amount } = payload;
        //1. change the product amount and totalPrice
        const editedProduct = {
          ...newProduct,
          amount: amount,
          totalPrice: amount * newProduct.price,
        };
        //2. find the index of the edited product and replace it with the newProduct
        const index = draftState.cart.findIndex(
          (product) => product.id === newProduct.id
        );
        draftState.cart.splice(index, 1, editedProduct);
        //3. calculate the TotalPrice
        draftState.totalPrice = 0;
        draftState.cart.forEach(
          (el) => (draftState.totalPrice += el.totalPrice)
        );

        return;

      default:
        return draftState;
    }
  });

export default cartReducer;
