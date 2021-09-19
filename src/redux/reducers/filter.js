import { SHOW_ALL, SHOW_COMPLETE } from '../actions'

// const initialState = {todos: [], filter:'ALL'};
// const filterInitialState = initialState.filter;

const initialState = 'ALL';

export default function filterReducer(previousState = initialState, action){
    
    if(action.type === SHOW_ALL){
        return "ALL";
    }

    
    if(action.type === SHOW_COMPLETE){
        return "COMPLETE";
    }

    return previousState;
}