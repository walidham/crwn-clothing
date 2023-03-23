import {createContext, useEffect, useState} from "react";

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
        return [...cartItems,{...productToAdd, quantity: 1}];
    }
}

const removeCartItem = (cartItems,productToRemove)=>{
    let cartItemExist = cartItems.find((cartItem) => {
        return (cartItem.id === productToRemove.id)
    })

    if(!cartItemExist)
        return cartItems;

    if(cartItemExist.quantity===1){
        return cartItems.filter((item)=>{
            return item.id!=productToRemove.id;
        })
    }else {
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
    }
}


const clearCartItem = (cartItems,productToClear)=> cartItems.filter((item)=> item.id!=productToClear.id);

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    cartCount:0,
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartTotal:0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);


    useEffect(()=>{
        //reduce two args : 1-Callback, 2-Start value
        const newCartCount = cartItems.reduce((total,item)=>{
            return total+item.quantity;
        },0);
        setCartCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
        //reduce two args : 1-Callback, 2-Start value
        const newCartTotal = cartItems.reduce((total,item)=>{
            return total+(item.quantity*item.price);
        },0);
        setCartTotal(newCartTotal);
    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }



    const removeItemFromCart = (productToRemove) =>{
        setCartItems(removeCartItem(cartItems,productToRemove))
    }

    const clearItemFromCart = (productToClear) =>{
        setCartItems(clearCartItem(cartItems,productToClear))
    }
    const value = {isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}