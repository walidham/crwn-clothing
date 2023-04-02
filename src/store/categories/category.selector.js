import {createSelector} from "reselect";

// state is the input , output wil be array
const sselectCategoriesReducer = (state)=> {
     return state.categories;
}

const selectCategories = createSelector(
    [sselectCategoriesReducer],
    (categoriesSlice)=>{
         return categoriesSlice.categories
    }
)
export const selectCategoriesMap = createSelector([selectCategories],
    (categories)=> {
         return categories.reduce((acc, category) => {
            const {title, items} = category;
            acc[title.toLowerCase()] = items;
            return acc;

        }, {})
    }
);

  /*  (state) => {
    return state.categories.categories.reduce((acc, category) => {
        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc;

    }, {});
};*/