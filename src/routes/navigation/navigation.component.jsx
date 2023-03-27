import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext, useState} from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer
} from './navigation.styles';
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

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
