import {Routes, Route} from 'react-router-dom';

import CategoriesPreview from "../categories-preveiw/categories-preview.component";
import CategoryComponent from "../category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {setCategories} from "../../store/categories/category.action";
import {useDispatch} from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoryArray));
        };
        getCategoriesMap();

    },[])
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<CategoryComponent/>} />
        </Routes>
    )
}

export default Shop;