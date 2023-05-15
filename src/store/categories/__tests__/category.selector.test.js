import {
    selectCategories,
    selectCategoriesMap,
    selectCategoriesIsLoading
} from '../category.selector'

const mockState = {
    categories: {
        isLoading: false,
        categories: [
            {
                title: 'mens',
                imageUrl: 'test',
                items: [
                    {id: 1, name: 'Product 1'},
                    {id: 2, name: 'Product 2'}
                ]
            },
            {
                title: 'womens',
                imageUrl: 'test2',
                items: [
                    {id: 3, name: 'Product 3'},
                    {id: 4, name: 'Product 4'}
                ]
            }
        ],

    }
}

describe('Category selector tests', () => {
    test('selectCategories should return categoriesData', () => {
        const categoriesSlice = selectCategories(mockState);
        expect(categoriesSlice).toEqual(mockState.categories.categories);
    });

    test('selectCategoriesIsLoading should return isLoading state', () => {
        const isLoadingsSlice = selectCategoriesIsLoading(mockState);
        expect(isLoadingsSlice).toEqual(mockState.categories.isLoading);
    });

    test('selectCategoriesMap should convert the items array into the appropriate map', () => {
        const expectedCategoriesMap = {
            mens: [
                {id: 1, name: 'Product 1'},
                {id: 2, name: 'Product 2'}],
            womens: [
                {id: 3, name: 'Product 3'},
                {id: 4, name: 'Product 4'}
            ]
        };

        const categoriesMap = selectCategoriesMap(mockState);
        expect(categoriesMap).toEqual(expectedCategoriesMap);
    })
})
