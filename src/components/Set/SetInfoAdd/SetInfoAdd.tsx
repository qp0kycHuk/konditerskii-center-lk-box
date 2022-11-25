import React, { useEffect, useState } from 'react'
import { Button } from '@components/ui/Button';
import { SetItem, SetItemPlaceholder } from '../SetItem/SetItem';
import { fetchCandies } from '@src/store/reducers/Candy/CandyActions';
import { useAppDispatch, useAppSelector } from '@src/hooks/redux';
import { ICandy } from '@src/models/ICandy';
import { setSlice } from '@src/store/reducers/Set/SetSlice';

import './SetInfoAdd.scss';

export const SetInfoAdd = () => {
    const { candyList, fetchLoading, fetchError } = useAppSelector((state) => state.candy)
    const { currentSet } = useAppSelector((state) => state.set)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchCandies())

    }, [])


    function addItem(item: ICandy, count: number) {
        console.log(count);

        dispatch(setSlice.actions.addCandy({
            ...item,
            count: count
        }))
    }

    function removeItem(item: ICandy) {
        dispatch(setSlice.actions.removeCandy({
            ...item
        }))
    }

    function isInSet(item: ICandy) {
        if (currentSet?.items) {
            return currentSet.items.find((c) => c.id === item.id) ? true : false
        }

        return false
    }

    return (
        <div className="card dialog-large">
            <div className="set-modal-top">
                <div className="text-h1 text--center">Добавить</div>
            </div>
            <div className="p-8">
                <form className="mb-5">
                    <div className="form-field">
                        <div className="form-input-cover">
                            <input type="text" className="form-input" placeholder="Поиск" />
                            <div className="form-input-end">
                                <Button icon>
                                    <svg className="icon"><use xlinkHref="img/icons.svg#search" /></svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="set-modal-items">
                    {candyList && candyList.length > 0 ?
                        candyList.map((candy: ICandy) => (
                            <SetItem
                                key={candy.id}
                                item={candy}
                                bordered
                                showCounter={true}
                                color={isInSet(candy) ? 'sec' : 'primary'}
                                showPlus={!isInSet(candy)}
                                showCheck={isInSet(candy)}
                                onPlusClick={({ count }) => addItem(candy, count)}
                                onCheckClick={() => removeItem(candy)} />
                        )) :
                        (<>
                            {!fetchError && (new Array(3).fill(1).map((_, i) => <SetItemPlaceholder key={i} />))}
                            {fetchError && fetchError}
                        </>)
                    }

                </div>
            </div>
        </div>
    )
}