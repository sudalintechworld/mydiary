import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import diary from "./modules/myDiary";

import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({diary});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer); 

export default store;

