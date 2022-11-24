import React from 'react';
import {ButtonBlock} from "../Buttons/ButtonBlock";
import {ButtonUnblock} from "../Buttons/ButtonUnblock";
import {ButtonDelete} from "../Buttons/ButtonDelete";

export const Toolbar = ({actionUsers}) => {
    return (
        <div className={"justify-around mb-8 border flex w-toolbar mx-auto border-gray-500"}>
            <ButtonBlock actionUsers={actionUsers}/>
            <ButtonUnblock actionUsers={actionUsers}/>
            <ButtonDelete actionUsers={actionUsers}/>
        </div>
    )
}