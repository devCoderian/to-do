import { createStore, applyMiddleware} from 'redux';
import todoApp from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware"
import history from '../history';
import { routerMiddleware } from 'connected-react-router' 

const store = createStore(
    todoApp,
    composeWithDevTools(applyMiddleware(
        thunk.withExtraArgument({history}),
        promise,
        routerMiddleware(history)))
    );

export default store;