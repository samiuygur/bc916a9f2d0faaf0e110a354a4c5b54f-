import * as actionTypes from '../actions/actionTypes';

const HOTEL_INITIAL_STATE = {
    hotels: []
}
 
const getHotelsReducer = (state = HOTEL_INITIAL_STATE, action) => {
    
    switch(action.type) {
        case actionTypes.GET_HOTELS_SUCCESS: 
            return { ...state, hotels: action.payload }
        case actionTypes.GET_HOTELS_ERROR: 
            return { ...state, message: action.payload}
        default: 
            return state
    }
   
}

export default getHotelsReducer;