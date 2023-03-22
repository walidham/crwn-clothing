import {useContext, useState} from "react";
import {ProductsContext} from "../../contexts/product.context";
import ProductCardComponent from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
    const {products}= useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map((product) => {
                return (
                    <ProductCardComponent key={product.id} product={product}/>
                )
            })
            }
        </div>
    )
}

export default Shop;