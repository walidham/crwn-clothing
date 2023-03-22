import {createContext, useEffect, useState} from "react";
import DATA from '../shop-data.json';

//Create product storage context: shopData and setShopData
export const ProductsContext = createContext({
    products:[],
    setProducts:()=> {

    }
})

export const ProductsProvider = ({children})=>{
    // Create state for shopData
    const [products,setProducts] = useState([]);
    //define object value contains shopData and setShopData
    const value= {products,setProducts};

    useEffect(()=>{
        //Init shopData, this use effect will run just at mount
        setProducts(DATA);
    },[])

    //now use context provider and pass it value object, to init the context storage
    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>)
}

