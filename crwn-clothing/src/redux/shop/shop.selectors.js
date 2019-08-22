import { createSelector } from 'reselect'; 

const selectShop = state => state.shop; 

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
);

// selector - here our collections is matching the collections url parameter
// 'createSelector' (curryFunction) - a function that takes the state and runs it through the selector flow we have written below
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections], 
        collections => collections[collectionUrlParam]
    )