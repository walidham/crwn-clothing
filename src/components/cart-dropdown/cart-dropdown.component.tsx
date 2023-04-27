import {CartDropdownContainer,CartItems,EmptyMessage} from './cart-dropdown.styles';
import Button from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";

const CartDropdownComponent = () => {
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
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


        </CartDropdownContainer>
    )
}

export default CartDropdownComponent;