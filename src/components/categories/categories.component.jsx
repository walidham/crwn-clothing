import './categories.styles.scss';
import CategoryItemComponent from "../category-item/category-item.component";

const CategoriesComponent =({categories})=>{
    return (
        <div className='categories-container'>
            {categories.map((category)=>{
                return (
                    <CategoryItemComponent key={category.id} category={category} />
                )
            })}
        </div>
    )
}

export default CategoriesComponent;
