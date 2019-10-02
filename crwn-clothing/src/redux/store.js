import { createStore, applyMiddleware } from 'redux'; 
import { persistStore } from 'redux-persist'; // allows our browser to cache our store depending on certain config options we set
import logger from 'redux-logger'; 
import rootReducer from './root-reducer'; 

// Setting up our Middleware 

const middlewares = []; 

// Setting the environment variable to development - it can also be production or test. This will let us known what stage we are at. 
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger); 
}

// applyMiddleware - this will spread in all of the methods from the [logger] array into this function call as individual arguements.
export const store = createStore(rootReducer, applyMiddleware(...middlewares))  

export const persistor = persistStore(store); // a persisted version of our store 

export default { store, persistor }; 
 