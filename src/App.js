import logo from './logo.svg';
import './App.css';

import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import UserListContainer from './containers/UserListContainer';

function App() {
  // const state = useReduxState();
  // const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <header className="App-header">
            <UserListContainer />
            <TodoListContainer />
            <TodoFormContainer />
          {/* <button onClick = {click}>추가</button>  */}
      </header>
    </div>
  );

  // function click(){
  //   //store.dispatch(addTodo('할일')); 훅 만들기 이전
  //   dispatch(addTodo('할일'));
  // }
}


export default App;
