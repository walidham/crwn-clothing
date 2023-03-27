import {Fragment, useContext} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import CategoryPreviewComponent from "../../components/categpry-preview/category-preview.component";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    return (
                        <CategoryPreviewComponent key={title} title={title} products={categoriesMap[title]}/>
                    )
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;