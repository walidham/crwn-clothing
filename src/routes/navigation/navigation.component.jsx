import {Outlet} from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import {useSelector} from "react-redux";

import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer
} from './navigation.styles';
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectIsCartOpen} from "../../store/cart/cart.selector";
import {Fragment} from "react";

const Navigation = () => {
   // const {currentUser} = useContext(UserContext);
    const currentUser= useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo'></CrwnLogo>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                            )
                            : (<NavLink to='/auth'>
                                SIGN-IN
                            </NavLink>)
                    }
                    <CartIconComponent></CartIconComponent>
                </NavLinks>
                {isCartOpen && <CartDropdownComponent/>}
            </NavigationContainer>
            <Outlet></Outlet>
        </Fragment>
    )
}
export default Navigation;
