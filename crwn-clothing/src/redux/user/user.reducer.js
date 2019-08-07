import { UserActionTypes } from './user.types'; 

// Setting our INTIAL_STATE as null. 
const INITIAL_STATE = {
    currentUser: null
}


// User reducer 
const userReducer = (state = INITIAL_STATE, action) => { // this is a function that takes a state object & an action as arguements.  
    // depending on what type of 'action' the switch statement will check if the case for this action type is equal to 'SET_CURRENT_USER' then it will return a new object out of this reducer. 
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload
            }

        default: 
            return state;
    }
}

export default userReducer; 