import {Img,Name,CartItemContainer,ItemDetails} from './cart-item.styles';

const CartItemComponent = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <span>{name}</span>
                <span >{quantity} x ${price}</span>
            </ItemDetails>

        </CartItemContainer>
    )
}

export default CartItemComponent;