import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {blockUsers} from "../../store/slices/usersSlice";
import {setIds} from "../../store/slices/idsSlice";

export const ButtonBlock = ({actionUsers}) => {

    const dispatch = useDispatch();
    const selectedIds = useSelector(state => state.ids.selectedIds)
    const user = useSelector(state => state.users.user);
    const navigate = useNavigate()

    const onButtonClick = () => {
        dispatch(blockUsers({ids: selectedIds})).then(data => actionUsers(Object.values(data.payload)));
        if(selectedIds.includes(user.id)){
            navigate('/auth/register');
            dispatch(setIds([]));
        }
    }

    return (
        <button onClick={()=>onButtonClick()} className={"max-w-25 border-gray-500 p-4"}>
            Block
        </button>
    )
}