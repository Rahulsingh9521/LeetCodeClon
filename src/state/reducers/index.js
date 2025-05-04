import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";

const reducers = combineReducers({
    auth: authenticationReducer
})

export default reducers;