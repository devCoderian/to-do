import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import UserList from "../components/UserList"
import axios from 'axios';
import { getUsersFail, getUsersStart, getUsersSucceess } from "../redux/actions";
import { getUsersThunk, getUsersPromise } from "../redux/actions"

export default function UserListContainer(){
    const users = useSelector((state)  => state.users.data)

    const dispatch = useDispatch();
    
    const getUsers = useCallback(()=> {
        // dispatch(getUsersThunk());
        //thunk 대신 프로미스
        dispatch(getUsersPromise()); //pending, fullfill 사용, payload 에서 사용됨
    },[dispatch])
    // const getUsers = useCallback(async () => {
    //         try{
    //             dispatch(getUsersStart());
    //         const res = await axios.get('https://api.github.com/users')
    //         // console.log(res.data)
    //         dispatch(getUsersSucceess(res.data));
    //         }catch(error){
    //             dispatch(getUsersFail(error));
    //         }
    //     },[dispatch])
   

    return <UserList users = {users} getUsers = {getUsers}/>
}