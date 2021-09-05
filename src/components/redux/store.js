import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import cardReducer from './card/cardReducer';
import stepReducer from './step/stepReducer';

const reducers = {
    cardReducer,
    stepReducer
};

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default store;