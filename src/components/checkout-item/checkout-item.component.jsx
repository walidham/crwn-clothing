import {
    Arrow,
    BaseSpan,
    CheckoutItemContainer,ImageContainer,Value,Quantity,RemoveButton} from './checkout-item.styles';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CheckoutItemComponent = ({cartItem}) => {
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
    const {name, imageUrl, price, quantity} = cartItem;

    const clearItemHandler = () => {
        clearItemFromCart(cartItem)
    }

    const decrementHandler = ()=> removeItemFromCart(cartItem);
    const incrementHandler = ()=> addItemToCart(cartItem)
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={decrementHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={incrementHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItemComponent;