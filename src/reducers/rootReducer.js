import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import setImagesReducer from './setImagesReducer';


export default combineReducers({
 searchReducer,
 setImagesReducer
});