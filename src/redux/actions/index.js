import axios from "axios";
import * as actionTypes from './actionTypes';

const hotelListUrl = 'https://5f6d939160cf97001641b049.mockapi.io/tkn/hotels';

export const getHotels = () => dispatch => {
    axios
    .get(hotelListUrl)
    .then(response => dispatch({ type: actionTypes.GET_HOTELS_SUCCESS, payload: response.data}))
    .catch(error => dispatch({ type: actionTypes.GET_HOTELS_ERROR, payload: error}));
}