import {Img, CartItemContainer, ItemDetails} from './cart-item.styles';
import {CartItem} from "../../store/cart/cart.types";
import {FC, memo} from 'react';

type CartItemProps = {
    cartItem:CartItem;
}
const CartItemComponent: FC<CartItemProps> =memo( ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetails>

        </CartItemContainer>
    )
})

export default CartItemComponent;
