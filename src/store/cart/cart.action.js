import {createAction} from "../../utils/reducer/reducer.utils";
import {CART_ACTION_TYPES} from "./cart.types";


const addCartItem = (cartItems, productToAdd) => {
    //find is productToAdd exist
    let cartItemExist = cartItems.find((cartItem) => {
        return (cartItem.id === productToAdd.id)
    })

    if (cartItemExist) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    } else {
        return [...cartItems, {...productToAdd, quantity: 1}];
    }
}

const removeCartItem = (cartItems, productToRemove) => {
    let cartItemExist = cartItems.find((cartItem) => {
        return (cartItem.id === productToRemove.id)
    })

    if (!cartItemExist)
        return cartItems;

    if (cartItemExist.quantity === 1) {
        return cartItems.filter((item) => {
            return item.id != productToRemove.id;
        })
    } else {
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
    }
}


const clearCartItem = (cartItems, productToClear) => cartItems.filter((item) => item.id != productToClear.id);


export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool)
export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}


export const removeItemFromCart = (cartItems,productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}

export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}
