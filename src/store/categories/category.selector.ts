import {createSelector} from "reselect";
import {CategoriesState} from "./category.reducer";
import {CategoryMap} from "./category.types";
import {RootState} from "../store";

// state is the input , output wil be array
const selectCategoriesReducer = (state:RootState):CategoriesState=> {
     return state.categories;
}

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice)=>{
         return categoriesSlice.categories
    }
)
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories):CategoryMap=> {
         return categories.reduce((acc, category) => {
            const {title, items} = category;
            acc[title.toLowerCase()] = items;
            return acc;

        }, {} as CategoryMap)
    }
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
