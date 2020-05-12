import { combineReducers } from 'redux';
import  quote from './getquotereducer';
import filterReducer from './filter'

export default combineReducers({
    quote,
    filterReducer
});





