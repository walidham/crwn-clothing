import {CartIconContainer,ShoppingIcon,ItemCount} from "./cart-icon.styles";


import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";


const CartIconComponent = ()=>{

    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
    //its my solution to calculate cart count
   /* const calculateItemCount=()=>{
        let count=0;
        cartItems.forEach((cartItem)=>{
            count = count + cartItem.quantity;
        })
       // alert(count+'')
        return count+'';

    }*/
    const toggleIsCartOpen = ()=>setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIconComponent;