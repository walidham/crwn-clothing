import {compose, legacy_createStore as createStore, applyMiddleware} from "redux";
//import {compose, createStore,applyMiddleware} from "redux";
import logger from 'redux-logger';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {rootReducer} from "./root-reducer";
import {loggerMiddleware} from "./middleware/logger";

// Config to tell persist what we want
const persistConfig={
    key:'root',
    storage,
    blacklist:['user']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);
//curry function
// function curry(f) { // curry(f) does the currying transform
//   return function(a) {
//     return function(b) {
//       return f(a, b);
//     };
//   };
// }
//
// // usage
// function sum(a, b) {
//   return a + b;
// }
//
// let curriedSum = curry(sum);
//
// alert( curriedSum(1)(2) ); // 3


//const middlewares = [loggerMiddleware]; filter to remove [false] and get []
const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production'
    && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
// first arg : root reducer
// second arg : default state
// third arg : middleware
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store)