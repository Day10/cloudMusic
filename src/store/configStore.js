import { createStore,  applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import rootReducers from '../reducers/index';

// 加中间件
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, promiseMiddleware, logger)(createStore);

export default function configStore(initialState) {
    return createStoreWithMiddleware(rootReducers, initialState)
}

export const store = configStore();