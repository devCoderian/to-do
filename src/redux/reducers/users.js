// import { GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_FAIL} from "../actions";

import {GET_USERS_START, GET_USERS_FAIL, GET_USERS_SUCCESS, GET_USERS_PENDING, GET_USERS_FULFILLED, GET_USERS_REJECTED} from "../actions";
const initialState = {
    loading: false,
    data: [],
    error: null
}
// export default function users(state = initialState,action){
//     if(action.type === GET_USERS_START){
//         return{
//             ...state,
//             loading: true,
//             error: null
//         }
//     }

//     if(action.type === GET_USERS_SUCCESS){
//         return{
//             ...state,
//             loading: false,
//             data: action.data,
//         }
//     }

//     if(action.type === GET_USERS_FAIL){
//         return{
//             ...state,
//             loading: false,
//             error: action.error,
//         }
//     }



//     return state;
// }

//프로미스 자동으로 바꾸어줌

export default function users(state = initialState,action){
    if(action.type === GET_USERS_START || action.type === GET_USERS_PENDING ){
        return{
            ...state,
            loading: true,
            error: null
        }
    }

    if(action.type === GET_USERS_FULFILLED){
        return{
            ...state,
            loading: false,
            data: action.payload,
        }
    }

    if(action.type === GET_USERS_REJECTED){
        return{
            ...state,
            loading: false,
            error: action.payloads,
        }
    }
    if(action.type === GET_USERS_SUCCESS){
        return{
            ...state,
            loading: false,
            data: action.data,
        }
    }

    if(action.type === GET_USERS_FAIL){
        return{
            ...state,
            loading: false,
            error: action.error,
        }
    }


    return state;
}