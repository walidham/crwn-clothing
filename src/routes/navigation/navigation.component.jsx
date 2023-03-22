import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext, useState} from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import './navigation.styles.scss';
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
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <CrwnLogo className='logo'></CrwnLogo>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ?(<span className='nav-link' onClick={signOutUser}>SIGN OUT</span> )
                            :(<Link className='nav-link' to='/auth'>
                                SIGN-IN
                            </Link>)
                    }
                    <CartIconComponent></CartIconComponent>
                </div>
                {isCartOpen && <CartDropdownComponent/>}
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}
export default Navigation;
