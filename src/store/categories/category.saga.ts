import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {fetchCategoriesFailed, fetchCategoriesSuccess} from "./category.action";

import {takeLatest,all,call, put} from 'typed-redux-saga/macro'
import {CATEGORIES_ACTION_TYPES} from "./category.types";

export function* fetchCategoriesAsync(){
    try{
        const categoryArray = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categoryArray));
        //dispatch(fetchCategoriesSuccess(categoryArray));
    }catch (error){
        yield* put(fetchCategoriesFailed(error as Error));
        //dispatch(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories(){
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}
export function* categoriesSaga(){
    yield* all([call(onFetchCategories)]);
}
