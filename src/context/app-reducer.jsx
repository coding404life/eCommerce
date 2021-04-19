import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART_FROM_ITEMS, EDIT_ITEM_CART } from './app-action';

const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const { id, amount } = action.payload
            // filter the cart if it has item with same id
            const itemCart = state.cart.filter(item => item.id === id);
            // make new item and distructure the old object and change the amount with old + new amount
            if (itemCart.length > 0) {
                const newItem = {
                    ...itemCart[ 0 ],
                    amount: itemCart[ 0 ].amount + amount
                }
                state.cart[ state.cart.findIndex(el => el.id === id) ] = newItem
                return {
                    cart: state.cart.filter(item => item.id !== action.payload)
                }
            }
            return {
                cart: [ ...state.cart, action.payload ]
            }
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case CLEAR_CART_FROM_ITEMS:
            return {
                ...state,
                cart: action.payload
            }
        case EDIT_ITEM_CART:
            return {
                cart: [ ...action.payload ]
            }
        default:
            return state;
    }
}

export default cartReducer;