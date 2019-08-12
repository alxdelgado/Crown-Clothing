import CartActionTypes from './cart.types';

import { addItemToCart } from './cart.utils'; 

const INITIAL_STATE = {
  hidden: true, 
  cartItems: [] // add the new value 'cartItems' into the inital state of our reducer 
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM: // new case listening for our addItem action 
      return {
        ...state, 
        cartItmes: addItemToCart(state.cartItems, action.payload) 
      }
    default:
      return state;
  }
};

export default cartReducer;