import {CartIconContainer,ShoppingIcon,ItemCount} from "./cart-icon.styles";

import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectIsCartOpen} from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.action";


const CartIconComponent = ()=>{
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    //its my solution to calculate cart count
   /* const calculateItemCount=()=>{
        let count=0;
        cartItems.forEach((cartItem)=>{
            count = count + cartItem.quantity;
        })
       // alert(count+'')
        return count+'';

    }*/
    const toggleIsCartOpen = ()=>dispatch(setIsCartOpen(!isCartOpen));
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIconComponent;