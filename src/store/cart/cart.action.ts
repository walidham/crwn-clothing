import {ActionWithPayload, createAction, WithMatcher} from "../../utils/reducer/reducer.utils";
import {CART_ACTION_TYPES, CartItem} from "./cart.types";
import {CategoryItem} from "../categories/category.types";


const addCartItem = (cartItems:CartItem[], productToAdd:CategoryItem):CartItem[] => {
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

const removeCartItem = (cartItems:CartItem[], productToRemove:CartItem):CartItem[] => {
    let cartItemExist = cartItems.find((cartItem) => {
        return (cartItem.id === productToRemove.id)
    })

    /*if (!cartItemExist)
        return cartItems;*/

    if (cartItemExist && cartItemExist.quantity === 1) {
        return cartItems.filter((item) => {
            return item.id !== productToRemove.id;
        })
    } else {
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
    }
}


const clearCartItem = (cartItems:CartItem[], productToClear:CartItem):CartItem[] =>
    cartItems.filter((item) => item.id !== productToClear.id);


export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = WithMatcher((bool:boolean):SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));

export const setCartItems= WithMatcher((cartItems:CartItem[]):SetCartItems=>
createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));
export const addItemToCart = (cartItems:CartItem[],productToAdd:CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
}


export const removeItemFromCart = (cartItems:CartItem[],productToRemove:CartItem) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems:CartItem[], productToClear:CartItem) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return setCartItems(newCartItems);
}
