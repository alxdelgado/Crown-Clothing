import { createSelector } from 'reselect'; 

// this object will match the string value from our URL param to the respective ID 
// The reason we are using an object is because our URL param is a string and the ID we want to match us a number
const COLLECTION_ID_MAP = {
    hats: 1, 
    sneakers: 2,
    jackets: 3, 
    womens: 4, 
    mens: 5
}

const selectShop = state => state.shop; 

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
);

// selector - here our collection.id is matching the url parameter of our COLLECTION_ID_MAP
// 'createSelector' (curryFunction) - a function that takes the state and runs it through the selector flow we have written below
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections], 
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )