import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {unblockUsers} from "../../store/slices/usersSlice";
import svgIcons from "../../assets/img/icons.svg";

export const ButtonUnblock = ({actionUsers}) => {

    const dispatch = useDispatch();
    const selectedIds = useSelector(state => state.ids.selectedIds)

    const onButtonClick = () => {
        dispatch(unblockUsers({ids: selectedIds})).then(data => actionUsers(Object.values(data.payload)));
    }

    return (
        <button onClick={() => onButtonClick()} className={"flex max-w-25 border-gray-500 p-4"}>
            <svg width={24} height={24}>
                <use xlinkHref={`${svgIcons}#unblock`}/>
            </svg>
            <span className={"pl-2"}>Unlock</span>
        </button>
    )
}