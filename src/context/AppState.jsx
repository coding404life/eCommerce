import React, { useReducer } from 'react'
import useFetch from '../hooks/useFetch';
import AppContext from './app-context';
import cartReducer from './app-reducer';
import { EDIT_ITEM_CART, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART_FROM_ITEMS } from './app-action';

const AppStateProvider = (props) => {
    //share functions and state logic from here

    const { data, isLoading } = useFetch('https://fakestoreapi.com/products');

    const initialState = {
        cart: [],
        totalPrice: 0
    }
    const [ state, dispatch ] = useReducer(cartReducer, initialState);

    //adding items to the cart item
    const addTocart = (item) => {
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: item
        })
    }
    //clear the cart item
    const clearListHandler = () => {
        dispatch({
            type: CLEAR_CART_FROM_ITEMS,
            payload: []
        })
    }
    //remove item from the cart
    const removeItemFromCart = (itemID) => {
        dispatch({
            type: REMOVE_ITEM_FROM_CART,
            payload: itemID
        })
    }
    // edit the whole cart with new one 
    const editCart = (newCart) => {
        dispatch({
            type: EDIT_ITEM_CART,
            payload: newCart
        })
    }
    // console.log(state.cart)
    return (
        <AppContext.Provider
            value={{
                data,
                isLoading,
                cart: state.cart,
                addTocart,
                removeItemFromCart,
                clearListHandler,
                totalPrice: state.totalPrice,
                editCart
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppStateProvider
