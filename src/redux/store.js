import { createStore, applyMiddleware} from 'redux';

// 
import logger from 'redux-logger'

// call the root reducer 
import rootReducer from './root-reducer';

// call redux-logger
const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store;