import {Fragment} from "react";
import CategoryPreviewComponent from "../../components/categpry-preview/category-preview.component";
import {useSelector} from "react-redux";
import {
    selectCategoriesIsLoading,
    selectCategoriesMap
} from "../../store/categories/category.selector";
import SpinnerComponent from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
    //const {categoriesMap} = useContext(CategoriesContext);
    const isLoading = useSelector(selectCategoriesIsLoading);

    const categoriesMap= useSelector(selectCategoriesMap);
    return (
        <Fragment>
            {
                isLoading ?<SpinnerComponent/>:(Object.keys(categoriesMap).map((title) => {
                    return (
                        <CategoryPreviewComponent key={title} title={title} products={categoriesMap[title]}/>
                    )
                }))
            }
        </Fragment>
    )
}

export default CategoriesPreview;