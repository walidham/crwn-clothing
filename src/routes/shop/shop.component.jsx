import {Routes, Route} from 'react-router-dom';

import CategoriesPreview from "../categories-preveiw/categories-preview.component";
import CategoryComponent from "../category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {fetchCategoriesAsync} from "../../store/categories/category.action";
import {useDispatch} from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCategoriesAsync());


    },[])
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<CategoryComponent/>} />
        </Routes>
    )
}

export default Shop;