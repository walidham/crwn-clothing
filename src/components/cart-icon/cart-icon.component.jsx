import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
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
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIconComponent;