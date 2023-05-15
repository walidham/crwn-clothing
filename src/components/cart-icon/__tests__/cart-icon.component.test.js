import {screen} from "@testing-library/react";
import {renderWithProvider} from "../../../utils/test/test.utils";

import CartIconComponent from "../cart-icon.component";

describe('Cart Icon tests',()=>{
    test('Uses preloadState to render',()=>{
        const initialCartItems = [
            {id:1, name:'Item A',imageUrl:'test', quantity:1},
            {id:2, name:'Item B',imageUrl:'test', quantity:2},
        ];

        renderWithProvider(<CartIconComponent/>,{
            preloadedState:{
                cart:{
                    cartItems: initialCartItems
                }
            }
        });
        const cartItemElement = screen.getByText('3');
        expect(cartItemElement).toBeInTheDocument();
    })
})
