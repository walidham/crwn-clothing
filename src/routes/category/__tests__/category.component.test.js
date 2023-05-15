import {screen} from "@testing-library/react";
import CategoryComponent from "../category.component";
import {renderWithProvider} from "../../../utils/test/test.utils";

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useParams :()=>({category:'mens'}), //return {category:'mens']
}))
describe('Category tests',()=>{
    test('it should render a spinner if isLoading is true',()=>{
        renderWithProvider(<CategoryComponent/>,{
            preloadedState:{
                categories:{
                    isLoading:true,
                    categories:[]
                }
            }
        });

        const spinnerElement = screen.getByTestId('spinner');
        expect(spinnerElement).toBeInTheDocument();
    });

    test('It should render products if isLoading is false and there are items present',()=>{
        renderWithProvider(<CategoryComponent/>,{
            preloadedState:{
                categories:{
                    isLoading:false,
                    categories:[
                        {
                            title:'mens',
                            items:[
                                {
                                    id:1,
                                    name:'Product 1'
                                },
                                {
                                    id:2,
                                    name:'Product 2'
                                },
                            ]
                        }
                    ]
                }
            }
        });

        const spinnerElement = screen.queryByTestId('spinner');
        expect(spinnerElement).toBeNull();
        const product1Element = screen.getByText(/product 1/i);
        expect(product1Element).toBeInTheDocument();
    })
})
