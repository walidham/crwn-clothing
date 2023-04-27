import {compose, legacy_createStore as createStore, applyMiddleware, Middleware} from "redux";
import logger from 'redux-logger';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {rootReducer} from "./root-reducer";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./root.saga";
import {PersistConfig} from "redux-persist/es/types";

declare global {
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}


export type RootState = ReturnType<typeof rootReducer>;
type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist : (keyof RootState)[];
};
// Config to tell persist what we want
const persistConfig:ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
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
const middlewares = [process.env.NODE_ENV !== 'production' &&
    logger,
    sagaMiddleware
//    thunk
    ].filter((middleware):middleware is Middleware=>Boolean(middleware));
const composeEnhancer = (process.env.NODE_ENV !== 'production'
    && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
// first arg : root reducer
// second arg : default state
// third arg : middleware
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)
