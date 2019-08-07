import { createStore, applyMiddleware } from 'redux'; 
import logger from 'redux-logger'; 
import rootReducer from './root-reducer'; 

// Setting up our Middleware 

const middlewares = [logger]; 

// applyMiddleware - this will spread in all of the methods from the [logger] array into this function call as individual arguements.
const store = createStore(rootReducer, applyMiddleware(...middlewares))  

export default store;
