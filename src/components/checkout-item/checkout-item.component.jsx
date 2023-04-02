import {
    Arrow,
    BaseSpan,
    CheckoutItemContainer,ImageContainer,Value,Quantity,RemoveButton} from './checkout-item.styles';
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.action";

const CheckoutItemComponent = ({cartItem}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
   // const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
    const {name, imageUrl, price, quantity} = cartItem;

    const clearItemHandler = () => {
        dispatch(clearItemFromCart(cartItems,cartItem));
    }

    const decrementHandler = ()=> dispatch(removeItemFromCart(cartItems,cartItem));
    const incrementHandler = ()=> dispatch(addItemToCart(cartItems,cartItem));
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