import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@components/ui/Button'

import './SetList.scss'
import { SetListItem, SetListItemPlaceholder } from './SetListItem'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { fetchSets } from '@src/store/reducers/Set/SetActions'
import { ISet } from '@src/models/ISet'

export const SetList = () => {
    const { setList, fetchLoading, fetchError } = useAppSelector((state) => state.set)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchSets())

    }, [])

    return (<>
        <div className="card dialog-large">
            <div className="set-modal-top">
                <div className="text-h1 text--center">Готовые наборы</div>
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
                <div className="set-list-items">
                    {setList && setList.length > 0 ?
                        setList.map((set: ISet) => (
                            <SetListItem key={set.id} item={set}></SetListItem>
                        )) :
                        (<>
                            {!fetchError && (new Array(3).fill(1).map((_, i) => <SetListItemPlaceholder key={i} />))}
                            {fetchError && fetchError}
                        </>)
                    }
                </div>
            </div>
        </div>

    </>)
}