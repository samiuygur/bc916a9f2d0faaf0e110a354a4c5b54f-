import getHotelsReducer from './getHotelsReducer';
import formReducer from './formReducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    getHotelsReducer,
    formReducer
})

export default rootReducer