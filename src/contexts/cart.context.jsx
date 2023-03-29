import {createContext, useReducer} from "react";
import {createAction} from "../utils/reducer/reducer.utils";


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

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    setIsCartOpen: () => {
    },
    addItemToCart: () => {
    },
    removeItemFromCart: () => {
    },
    clearItemFromCart: () => {
    },

});

const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}
const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}
const cartReducer = (state, action) => {
    const {type, payload} = action;
    console.log(state)

    console.log(payload)
    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen:payload
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };

        default:
            throw new Error(`unhandled type ${type} cartReducer`);
    }
}
export const CartProvider = ({children}) => {

    const [{isCartOpen,cartItems,cartCount,cartTotal}
        , dispatch] = useReducer(cartReducer, INITIAL_STATE);


    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        const newCartTotal = newCartItems.reduce((total, item) => {
            return total + (item.quantity * item.price);
        }, 0);

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,
            {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            })
        );

    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }


    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearCartItem(cartItems, productToClear);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool)=>{
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));
    }
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
    }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}