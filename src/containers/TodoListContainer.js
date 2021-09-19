import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";


function TodoListContainer () {
    
    const todos = useSelector((state) => state.todos)
    console.log(todos)
    return <><TodoList todos = {todos}/></>
}
export default TodoListContainer
