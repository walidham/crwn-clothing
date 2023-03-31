
import {CategoryTitle, CategoryContainer} from './category.styles';
import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import ProductCardComponent from "../../components/product-card/product-card.component";
import {useSelector} from "react-redux";
import {selectCategories} from "../../store/categories/category.selector";

const CategoryComponent =()=>{
    const {category}=useParams();
    const categoriesMap = useSelector(selectCategories);
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