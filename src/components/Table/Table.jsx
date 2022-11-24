import React from 'react';
import {Cell} from "../Cell/Cell";
import {Checkbox} from "../Checkbox/Checkbox";
import {getStatusString} from "../../utils/getStatusString";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../store/slices/usersSlice";
import {Toolbar} from "../Toolbar/Toolbar";
import {useNavigate} from "react-router-dom";

export const Table = () => {

    const [users, setUsers] = React.useState(useSelector(state => state.users.users));
    const [ids, setIds] = React.useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(!localStorage.getItem('token')) navigate('/auth/login')
        dispatch(fetchUsers()).then(data => {setUsers(Object.values(data.payload))});

    }, [])

    return (
        <div className={"w-full mx-auto border-t-gray-500"}>
            <Toolbar actionUsers={setUsers}/>
            {users.map(user => {
                return (
                    <div key={user.id} className={"flex w-full justify-between cursor-pointer"}>
                        <Cell>
                            <Checkbox userId={user.id}/>
                        </Cell>
                        <Cell>
                            <span>{user.first_name} {user.second_name}</span>
                        </Cell>
                        <Cell>
                            <span>{user.id}</span>
                        </Cell>
                        <Cell>
                            <span>{user.email}</span>
                        </Cell>
                        <Cell>
                            <span>{(user.register_date).slice(0,10)} {user.register_time}</span>
                        </Cell>
                        <Cell>
                            <span>{(user.login_date).slice(0,10)} {user.login_time}</span>
                        </Cell>
                        <Cell>
                            <span>{getStatusString(user.status)}</span>
                        </Cell>
                    </div>
                )
            })}
        </div>
    )
}