import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from './checkout.styles';

import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";

const CheckoutComponent = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

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