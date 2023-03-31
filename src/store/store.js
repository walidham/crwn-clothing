import {compose, legacy_createStore  as createStore,applyMiddleware} from "redux";
//import {compose, createStore,applyMiddleware} from "redux";
import logger from 'redux-logger';

import {rootReducer} from "./root-reducer";

const middlewares=[logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));
// first arg : root reducer
// second arg : default state
// third arg : middleware
export const store = createStore(rootReducer,undefined,composedEnhancers);