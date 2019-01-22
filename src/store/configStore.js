import { createStore,  applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';

import rootReducers from '../reducers/index';

// 加中间件
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configStore(initialState) {
    return createStoreWithMiddleware(rootReducers, initialState)
}