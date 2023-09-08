import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./Index";
import thunk from "redux-thunk";

const initStore = {};
const middleware = [thunk];

const store = createStore(rootReducer, initStore, applyMiddleware(...middleware));

export default store;