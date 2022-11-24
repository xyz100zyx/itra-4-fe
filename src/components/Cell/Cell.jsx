import React from 'react';
import './styles/Cell.module.scss';

export const Cell = ({children}) => {
    return (
        <div className={"min-w-mincell md:min-w-mincell sm:min-w-mincell-sm text-center h-4 border-l-gray-500 border-r-gray-500 border-b-gray-500 pb-10"}>
            {children}
        </div>
    )
}
