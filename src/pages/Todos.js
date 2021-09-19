import TodoListContainer from '../containers/TodoListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import React from 'react'

const Todos = () => {
    return (
        <div>
            <TodoFormContainer />
            <TodoListContainer />
           
        </div>
    )
}

export default Todos
