import {createBrowserHistory} from 'history'

const history = createBrowserHistory();//thunk.withExtraArgument({history}); //새로운 미들웨어 다 됨
export default history;