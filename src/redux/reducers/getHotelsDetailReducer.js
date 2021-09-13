import * as actionTypes from '../actions/actionTypes';

const HOTEL_DETAIL_INITIAL_STATE = {
    hotelsDetail: []
}
 
export const getHotelsDetailReducer = (state = HOTEL_DETAIL_INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.GET_HOTELS_DETAIL_SUCCESS: return { ...state, hotels: action.payload }
        case actionTypes.GET_HOTELS_DETAIL_ERROR: return { ...state, message: action.payload}
        default: return state
    }
}