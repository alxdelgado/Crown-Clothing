// import { createSelector } from 'reselect'; 

// // 2 types of selectors
// // Input Select - does not use createSelector 
// // Output Selector - does use input selector and createSelector to build themselves. 

// // Input Selector - it is a function that gets the whole state and returns a slice of it 1 layer deep.

// const selectCart = state => state.cart; 

// export const selectCartItems = createSelector( // createSelector takes two arguements 
//     [selectCart], // first arguement is a collection(array) of input selectors 
//     (cart) => cart.cartItems // second arguement is a function that returns the value we want out of the selector. 
// ); 

// export const selectCartItemsCount = createSelector(
//     [selectCartItems], 
//     cartItems => 
//         cartItems.reduce(
//             (accumulatedQuantity, cartItem) => 
//                 accumulatedQuantity + cartItem.qauntity,
//                 0
//         )
// );

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);