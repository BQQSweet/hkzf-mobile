//创建核心store对象
import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './reducers'
//引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
//使用redux开发者工具所需要的配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


export default createStore(reducers,composeEnhancers(applyMiddleware(thunk)))