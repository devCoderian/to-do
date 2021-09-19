import { createStore, applyMiddleware} from 'redux';
import todoApp from './reducers/index';
// import composeWithDevTools from 'redux-devtools-extension' 
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import promise from "redux-promise-middleware";
import promise from "redux-promise-middleware"

const store = createStore(todoApp,composeWithDevTools(applyMiddleware(thunk, promise)));

export default store;