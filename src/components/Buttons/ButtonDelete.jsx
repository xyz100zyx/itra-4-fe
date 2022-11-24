import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUsers} from "../../store/slices/usersSlice";
import {setIds} from "../../store/slices/idsSlice";
import {useNavigate} from "react-router-dom";

export const ButtonDelete = ({actionUsers}) => {
    const dispatch = useDispatch();
    const selectedIds = useSelector(state => state.ids.selectedIds)
    const user = useSelector(state => state.users.user);
    const navigate = useNavigate()

    const onButtonClick = () => {
        dispatch(deleteUsers({ids: selectedIds})).then(data => actionUsers(Object.values(data.payload)));
        if(selectedIds.includes(user.id)){
            navigate('/auth/register');
        }
        dispatch(setIds([]));
    }

    return (
        <button onClick={() => onButtonClick()} className={"max-w-25 border-gray-500 p-4"}>
            Delete
        </button>
    )
}