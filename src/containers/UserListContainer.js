import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import UserList from "../components/UserList"
import { getUsersPromise, getUsersSagaStart , getUsersThunk } from "../redux/modules/users"

export default function UserListContainer(){
    const users = useSelector((state)  => state.users.data)

    const dispatch = useDispatch();
    
    const getUsers = useCallback(()=> {
        dispatch(getUsersSagaStart());
        // dispatch(getUsersThunk());
        //thunk 대신 프로미스
        // dispatch(getUsersPromise()); //pending, fullfill 사용, payload 에서 사용됨
    },[dispatch])
   

    return <UserList users = {users} getUsers = {getUsers}/>
}