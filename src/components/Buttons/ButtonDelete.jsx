import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUsers} from "../../store/slices/usersSlice";
import {setIds} from "../../store/slices/idsSlice";
import {useNavigate} from "react-router-dom";
import svgIcons from "../../assets/img/icons.svg";

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
        <button onClick={() => onButtonClick()} className={"flex max-w-25 border-gray-500 p-4"}>
            <svg width={24} height={24}>
                <use xlinkHref={`${svgIcons}#delete`}/>
            </svg>
            <span className={"pl-2"}>Block</span>
        </button>
    )
}