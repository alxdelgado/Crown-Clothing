import { UserActionTypes } from './user.types';

// These are just functions that return objects. Objects are already in the correct format that the actions are expected to be. 

// User action 
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // Align the actions creators type with the reducers type expectation. 
    payload: user
}); 