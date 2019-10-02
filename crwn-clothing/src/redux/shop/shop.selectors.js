import { createSelector } from 'reselect'; 

const selectShop = state => state.shop; 

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
);


export const selectCollectionsForPreview = createSelector(
    [selectCollections], 
    collections => Object.keys(collections).map(key => collections[key]) // we want to get all the keys and map over the keys to get out the value of the collections object - which will give us an array of our items. 
); 

// selector - here our collections is matching the collections url parameter
// 'createSelector' (curryFunction) - a function that takes the state and runs it through the selector flow we have written below
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections], 
        collections => collections[collectionUrlParam]
    )