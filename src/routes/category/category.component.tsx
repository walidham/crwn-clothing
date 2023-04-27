import {CategoryTitle, CategoryContainer} from './category.styles';
import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import ProductCardComponent from "../../components/product-card/product-card.component";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";
import SpinnerComponent from "../../components/spinner/spinner.component";

type CategoryRootParams={
    category:string;
}
const CategoryComponent = () => {
    const {category} = useParams<keyof CategoryRootParams>() as CategoryRootParams;
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? <SpinnerComponent/> : (
                    <CategoryContainer>

                        {
                            products && products.map((product) => <ProductCardComponent key={product.id}
                                                                                        product={product}/>)
                        }
                    </CategoryContainer>
                )
            }

        </Fragment>

    )
}

export default CategoryComponent;
