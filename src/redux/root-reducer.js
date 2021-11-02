// actual code that combine all of our code 

// overall reducer to combine
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
})