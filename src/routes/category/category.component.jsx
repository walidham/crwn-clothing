
import {CategoryTitle, CategoryContainer} from './category.styles';
import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import ProductCardComponent from "../../components/product-card/product-card.component";

const CategoryComponent =()=>{
    const {category}=useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products,setProducts] = useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);

    return(
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>

                {
                    products && products.map((product)=> <ProductCardComponent key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>

    )
}

export default CategoryComponent;