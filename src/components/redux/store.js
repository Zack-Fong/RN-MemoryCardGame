import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import cardReducer from './card/cardReducer';

const reducers = {
    cardReducer
};

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default store;