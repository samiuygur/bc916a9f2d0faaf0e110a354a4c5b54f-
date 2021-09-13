import * as actionTypes from '../actions/actionTypes';

const RESERVTION_FORM_INITIAL_STATE = {
    hotelName: '',
    enteranceDate: '',
    leaveDate: '',
    adultCount: '',
    childCount: '',
    roomType: '',
    viewType: '',
}

const formReducer = (state = RESERVTION_FORM_INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.MAKE_RESERVATION_SUCCESS: 
            return { ...state, reservation: action.payload }
        case actionTypes.MAKE_RESERVATION_ERROR: 
            return { ...state, message: action.payload}
        default: 
            return state
    }
}

export default formReducer;