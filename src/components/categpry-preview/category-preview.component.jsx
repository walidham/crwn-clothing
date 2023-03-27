import {Title,Preview,CategoryPreviewContainer} from './category-preview.styles';
import ProductCardComponent from "../product-card/product-card.component";
import {Link} from "react-router-dom";

const CategoryPreviewComponent = ({title, products}) => {

    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>
                    {title.toUpperCase()}
                </Title>
            </h2>
            <Preview>
                {
                    products.filter((_,idx)=> idx<4)
                        .map((product)=>{
                            return (
                                <ProductCardComponent key={product.id} product={product} />
                            )
                        })
                }

            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreviewComponent;