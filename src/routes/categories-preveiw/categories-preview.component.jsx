import {Fragment} from "react";
import CategoryPreviewComponent from "../../components/categpry-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategories, selectCategoriesMap} from "../../store/categories/category.selector";

const CategoriesPreview = () => {
    //const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap= useSelector(selectCategoriesMap);
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