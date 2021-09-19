import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from '../actions'

// const initialState = {todos: [], filter:'ALL'};
// const todosInitialState = initialState.todos;

const initialState = [];
export default function todosReducer(previousState = initialState, action){
 
    if(action.type === ADD_TODO){
        return  [...previousState, { text: action.text, done:false}];
    }
    if(action.type === COMPLETE_TODO){
      
        return previousState.map((todo, index) =>{
                if(index === action.index){
                    return { ...todo, done: true}
                }

                return todo;
            })
    }
    return previousState;
}
