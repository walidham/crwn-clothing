import './cart-dropdown.styles.scss';
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
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((cartItem) => {
                        return (
                            <CartItemComponent key={cartItem.id} cartItem={cartItem}/>
                        )
                    })
                }
            </div>

            <Button type='button' onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>


        </div>
    )
}

export default CartDropdownComponent;