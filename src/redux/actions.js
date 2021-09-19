import axios from 'axios'
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

// [{text: '코딩', done: false}, {text: '코딩', done: false}]
export function addTodo(text){
    return {
        type: ADD_TODO,
        text,
    }
}

export function completeTodo(index){
    return{
        type: COMPLETE_TODO,
        index
    }
}

//필터 변경을 위해 만듬-> 인자 전달 필요 X
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll(){
    return { type: SHOW_ALL }; 
}


export function showComplete(){
    return { type: SHOW_COMPLETE }; 
}

//users
export const GET_USERS_START = "GET_USERS_START" //깃헙 API 호출 시작을 의미
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS" //깃헙 API 호출에 대한 응답이 성공인 경우
export const GET_USERS_FAIL = "GET_USERS_FAIL"  //깃헙 API 호출에 대한 응답이 실패인 경우

export function getUsersStart(){
    return {
        type: GET_USERS_START,
        //시작 부분 초기값으로 돌아가는 거라 인자 필요 없음
    }
}
//응답값 데이터를 받아와야함
export function getUsersSucceess(data){
    return {
        type: GET_USERS_SUCCESS,
        data
    }
}
export function getUsersFail(error){
    return {
        type: GET_USERS_FAIL,
        error
    }
}

export function getUsersThunk(){
    // dispatch 는 원래 액션을 스토어에 전달하는 행위 -> 보통 컨테이너에서 처리
    // 액션을 생성하는 쪽에서 하도록 변경
    //원래 유저리스트 컨테이너에 있던 소스
    return async(dispatch) =>{
        try{
            dispatch(getUsersStart());
        const res = await axios.get('https://api.github.com/users')
        // console.log(res.data)
        dispatch(getUsersSucceess(res.data));
        }catch(error){
            dispatch(getUsersFail(error));
        }

    }
}


const GET_USERS = "GET_USERS";

//리덕스가 프로미스 자동으로 만들어줌 -> users에서 변경해줌
export const GET_USERS_PENDING = "GET_USERS_PENDING";

export const GET_USERS_FULFILLED = "GET_USERS_FULFILLED";

export const GET_USERS_REJECTED = "GET_USERS_REJECTED";
//디스패치 직접할 필요없어짐 프로미스 미들웨어
export function  getUsersPromise() {

    return { 
        type: GET_USERS,
        payload: async() =>{
            const res = await axios.get('https://api.github.com/users');
            console.log(res);
            return res.data;
        }
    }
}
