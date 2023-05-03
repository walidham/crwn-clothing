import {CartDropdownContainer,CartItems,EmptyMessage} from './cart-dropdown.styles';
import Button from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {useCallback, useState} from "react";

const CartDropdownComponent = () => {
    const navigate = useNavigate();
   /* const [temp,setTemp]=useState('A');*/

    const goToCheckoutHandler =  useCallback(() => {
        //console.log(temp);
        navigate('/checkout');
    },[])
    const cartItems = useSelector(selectCartItems);
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?(cartItems.map((cartItem) => {
                        return (
                            <CartItemComponent key={cartItem.id} cartItem={cartItem}/>
                        )
                    })):(<EmptyMessage>Your cart is empty</EmptyMessage>)
                }

            </CartItems>

            <Button type='button' onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
           {/* <Button type='button' onClick={()=>setTemp('B')}>Update</Button>*/}


        </CartDropdownContainer>
    )
}

export default CartDropdownComponent;
