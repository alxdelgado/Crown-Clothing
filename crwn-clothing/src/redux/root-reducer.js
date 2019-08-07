import { combineReducers } from 'redux'; 

import userReducer from './user/user.reducer'; // always add your reducers to the 'root-reducer'.
import cartReducer from './cart/cart.reducer';

// This will be the code that combines all of our 'states' together - This is the root-reducer
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});