import Home from './pages/Home'
import Todos from './pages/Todos';
import Users from './pages/Users';
import { Router, Route} from 'react-router-dom'
import history from './history';
import { ConnectedRouter } from 'connected-react-router';
function App() {
  return (
        <ConnectedRouter history = {history}>
        <Route path ="/" component = { Home } />
        <Route path ="/todos" component = { Todos } />
        <Route path ="/users" component = { Users } />
        </ConnectedRouter>
  );
}


export default App;
