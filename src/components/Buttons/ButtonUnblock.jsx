import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {unblockUsers} from "../../store/slices/usersSlice";

export const ButtonUnblock = ({actionUsers}) => {

    const dispatch = useDispatch();
    const selectedIds = useSelector(state => state.ids.selectedIds)

    const onButtonClick = () => {
        dispatch(unblockUsers({ids: selectedIds})).then(data => actionUsers(Object.values(data.payload)));
    }

    return (
        <button onClick={() => onButtonClick()} className={"max-w-25 border-gray-500 p-4"}>
            Unblock
        </button>
    )
}