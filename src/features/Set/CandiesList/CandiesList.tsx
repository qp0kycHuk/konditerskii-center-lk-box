import React, { useEffect, useState } from 'react'
import { Button } from '@components/ui/Button';
import { CandiesListItem } from './CandiesListItem';
import { fetchCandies } from '@src/store/reducers/Candy/CandyActions';
import { useAppDispatch, useAppSelector } from '@src/hooks/redux';
import { ICandy } from '@src/models/ICandy';
import { setSlice } from '@src/store/reducers/Set/SetSlice';
import { ISetItem } from '@src/models/ISetItem';
import { CandyRowPlaceholder } from '../CandyRow/CandyRow';

import './CandiesList.scss';


// Модалка с конфетами

export const CandiesList = () => {
    const { candyList, fetchLoading, fetchError } = useAppSelector((state) => state.candy)
    const { currentSet } = useAppSelector((state) => state.set)
    const dispatch = useAppDispatch()

    const [items, setItems] = useState<ISetItem[]>()

    useEffect(() => {
        dispatch(fetchCandies())

    }, [])

    useEffect(() => {
        setItems(candyList.map((c) => {
            const setItem = checkInSet(c)

            return {
                ...c,
                isInSet: !!setItem,
                count: setItem ? setItem.count : 1
            }
        }))
    }, [candyList, currentSet])




    function checkInSet(item: ICandy) {
        if (currentSet?.items) {
            return currentSet.items.find((c) => c.id === item.id)
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
                    {items && items.length > 0 ?
                        items.map((candy) => (
                            <CandiesListItem
                                key={candy.id}
                                item={candy}
                                bordered
                                initialCount={candy.count}
                                color={candy.isInSet ? 'sec' : 'primary'}
                                showPlus={!candy.isInSet}
                                showCheck={candy.isInSet} />
                        )) :
                        (<>
                            {!fetchError && (new Array(3).fill(1).map((_, i) => <CandyRowPlaceholder key={i} />))}
                            {fetchError && fetchError}
                        </>)
                    }

                </div>
            </div>
        </div>
    )
}