import React, { useEffect, useState } from 'react'
import { SetCandiesItem } from './SetCandiesItem';
import { useAppSelector } from '@src/hooks/redux';


import './SetCandies.scss';


// Сипсок конфет в наборе

export const SetCandies = () => {
    const { currentSet } = useAppSelector((state) => state.set)

    return (<>
        {currentSet?.items.map((candy) => (
            <SetCandiesItem
                key={candy.id}
                item={candy}
                bordered
                initialCount={candy.count}
                color='sec'
                showCheck={true}

            />
        ))}
    </>)
}