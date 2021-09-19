import axios from 'axios'
//users
const GET_USERS_START = "to-do-redux/users/GET_USERS_START" //깃헙 API 호출 시작을 의미
const GET_USERS_SUCCESS = "to-do-redux/users/GET_USERS_SUCCESS" //깃헙 API 호출에 대한 응답이 성공인 경우
const GET_USERS_FAIL = "to-do-redux/users/GET_USERS_FAIL"  //깃헙 API 호출에 대한 응답이 실패인 경우

//redux-promise-middleware
const GET_USERS = "GET_USERS";

//리덕스가 프로미스 자동으로 만들어줌 -> users에서 변경해줌
const GET_USERS_PENDING = "GET_USERS_PENDING";
const GET_USERS_FULFILLED = "GET_USERS_FULFILLED";
const GET_USERS_REJECTED = "GET_USERS_REJECTED";


//액션 생성 함수
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

//초기값
const initialState = {
    loading: false,
    data: [],
    error: null
}
//프로미스 자동으로 바꾸어줌

export default function reducer(state = initialState,action){
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

//redux-promise-middleware
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

function sleep(ms){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve();
        }, ms)
    })
}

// redux-thunk
export function getUsersThunk() {
    return async (dispatch, getState, { history }) => {
      try {
        console.log(history);
        dispatch(getUsersStart());
        // sleep
        await sleep(5000);
        const res = await axios.get("https://api.github.com/users");
        dispatch(getUsersSucceess(res.data));
        history.push("/");
      } catch (error) {
        dispatch(getUsersFail(error));
      }
    };
  }