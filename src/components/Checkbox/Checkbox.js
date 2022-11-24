import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIds} from "../../store/slices/idsSlice";

export const Checkbox = ({userId, main}) => {

    const dispatch = useDispatch()

    const [checked, setChecked] = React.useState(false)
    const users = useSelector(state => state.users.users);
    const selectedIds = useSelector(state => state.ids.selectedIds);


    const onCheckBoxClick = () => {
        if(main){
            users.map(user => {
                dispatch(setIds(user.id));
                setChecked(!checked);
            })
        }else{
            dispatch(setIds(userId))
        }
    }


    return (
        <input onChange={() => onCheckBoxClick()} checked={selectedIds.includes(userId) || users.length === selectedIds.length} type="checkbox"/>
    )
}