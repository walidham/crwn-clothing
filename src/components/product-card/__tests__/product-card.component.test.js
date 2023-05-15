import {screen, fireEvent} from "@testing-library/react";

import {renderWithProvider} from "../../../utils/test/test.utils";
import ProductCardComponent from "../product-card.component";
describe('Product card tests',()=>{
    test('it should add product when product card button is clicked',async ()=>{
        const mockProduct = {
            id:'1',
            name:'Item A',
            imageUrl:'test',
            price:1222,
        }

        const {store}= renderWithProvider(<ProductCardComponent product={mockProduct}/>,{
            preloadedState:{
                cart:{
                    cartItems:[]
                }
            }
        });

        const addToCartButtonElement = screen.getByRole('button');
        await fireEvent.click(addToCartButtonElement);

        expect(store.getState().cart.cartItems.length).toBe(1);
    })
})
