import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from './checkout.styles';

import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

const CheckoutComponent = () => {
    //const {cartItems, cartTotal} = useContext(CartContext);
    const cartTotal = useSelector(selectCartTotal);
    const cartItems = useSelector(selectCartItems);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {
                cartItems.map((item) => {
                    return (
                       <CheckoutItemComponent cartItem={item} key={item.id}></CheckoutItemComponent>
                    )
                })
            }
            <Total>Total: ${cartTotal}</Total>

        </CheckoutContainer>
    )
}

export default CheckoutComponent;