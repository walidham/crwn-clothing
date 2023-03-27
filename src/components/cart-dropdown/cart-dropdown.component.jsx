import {CartDropdownContainer,CartItems,EmptyMessage} from './cart-dropdown.styles';
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CartItemComponent from "../cart-item/cart-item.component";
import {Link, Navigate, useNavigate} from "react-router-dom";

const CartDropdownComponent = () => {
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    const {cartItems} = useContext(CartContext);
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


        </CartDropdownContainer>
    )
}

export default CartDropdownComponent;