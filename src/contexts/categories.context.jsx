import {createContext, useEffect, useState} from "react";
import {addCollectionAndDocument, getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';
import SHOP_DATA from '../shop-data'
//Create product storage context: shopData and setShopData
export const CategoriesContext = createContext({
    categoriesMap:{},

})

export const CategoriesProvider = ({children})=>{
    // Create state for shopData
    const [categoriesMap,setCategoriesMap] = useState({});
    //define object value contains shopData and setShopData
    const value= {categoriesMap};
    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();

    },[])

    //now use context provider and pass it value object, to init the context storage
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}

