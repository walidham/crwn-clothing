import {Routes, Route} from 'react-router-dom';

import CategoriesPreview from "../categories-preveiw/categories-preview.component";
import CategoryComponent from "../category/category.component";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<CategoryComponent/>} />
        </Routes>
    )
}

export default Shop;