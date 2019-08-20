import { combineReducers } from 'redux'; 
import { persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage'; // we will get the actual local storage object from our window browser 


import userReducer from './user/user.reducer'; // always add your reducers to the 'root-reducer'.
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer'; 
import shopReducer from './shop/shop.reducer'; 

// This is the JSON object that respresents the possible configurations we want redux persist to use 
const persistConfig = {
    key: 'root', 
    storage, 
    whitelist: ['cart'] // this lets redux persist know that the only object we want to 'whitelist' (persist) is the cart
}

// This will be the code that combines all of our 'states' together - This is the root-reducer
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer

});

export default persistReducer(persistConfig, rootReducer); 