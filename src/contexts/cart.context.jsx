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
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    cartCount:0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount]=useState(0);

    useEffect(()=>{
        //reduce two args : 1-Callback, 2-Start value
        const newCartCount = cartItems.reduce((total,item)=>{
            return total+item.quantity;
        },0);
        setCartCount(newCartCount);
    },[cartItems])
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = {isCartOpen, setIsCartOpen,addItemToCart,cartItems,cartCount}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}