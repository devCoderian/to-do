//필터 변경을 위해 만듬-> 인자 전달 필요 X

//액션 타입 정의
const SHOW_ALL = "SHOW_ALL";
const SHOW_COMPLETE = "SHOW_COMPLETE";

//액션 생성 함수
export function showAll(){
    return { type: SHOW_ALL }; 
}

export function showComplete(){
    return { type: SHOW_COMPLETE }; 
}

//초기값
const initialState = 'ALL';

//리듀서
export default function reducer(previousState = initialState, action){
    
    if(action.type === SHOW_ALL){
        return "ALL";
    }

    
    if(action.type === SHOW_COMPLETE){
        return "COMPLETE";
    }

    return previousState;
}