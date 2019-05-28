import { combineReducers } from 'redux';
import list from './list.js';
import user from './user.js';
import details from './details.js'



let reducer = combineReducers({
    list,
    details,
    user
})

export default reducer;