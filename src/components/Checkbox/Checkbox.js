import React from 'react';
import {useDispatch} from "react-redux";
import {setIds} from "../../store/slices/idsSlice";

export const Checkbox = ({userId}) => {

    const dispatch = useDispatch()

    const [checked, setChecked] = React.useState(false)

    const onCheckBoxClick = () => {
        setChecked(!checked);
        dispatch(setIds(userId))
    }

    return (
        <input onChange={() => onCheckBoxClick()} checked={checked} type="checkbox"/>
    )
}