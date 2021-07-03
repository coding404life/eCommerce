const itemCart = state.cart.find((item) => item.id === product.id);

//if the same item is been added return the new amount and totalPrice
if (itemCart) {
  const newItem = {
    ...itemCart,
    amount: itemCart.amount + product.amount,
  };

  // const itemIndex = state.cart.findIndex((el) => el.id === product.id);
  // state.cart[itemIndex] = newItem; // bad logic

  return {
    ...state,
    totalPrice: state.cart.forEach(
      (item) => (state.totalPrice += item.totalPrice)
    ),
    cart: state.cart.map((cartItems) =>
      cartItems.id === product.id
        ? [...cartItems, newItem]
        : [...cartItems, action.payload]
    ),
  };
}

//if new item been added add the new item and totalPrice
return {
  totalPrice: state.cart.forEach(
    (item) => (state.totalPrice += item.totalPrice)
  ),
  cart: [...state.cart, action.payload],
};
