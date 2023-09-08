import {combineReducers} from "redux";
import {userReducer} from "./redux/reducers/user";

export const rootReducer = combineReducers({
    users: userReducer
})