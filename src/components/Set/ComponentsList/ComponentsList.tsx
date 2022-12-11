import React, { useEffect, useState } from 'react'
import { Button } from '@components/ui/Button';
import { ComponentsListItem } from './ComponentsListItem';
import { fetchCandies } from '@src/store/reducers/Candy/CandyActions';
import { useAppDispatch, useAppSelector } from '@src/hooks/redux';
import { ICandy } from '@src/models/ICandy';
import { setSlice } from '@src/store/reducers/Set/SetSlice';
import { CandyRowPlaceholder } from '../CandyRow/CandyRow';
import { fetchComponents } from '@src/store/reducers/Component/ComponentActions';

import './ComponentsList.scss';


// Модалка с конфетами

export const ComponentsList = () => {
    const { componentsList, fetchLoading, fetchError } = useAppSelector((state) => state.component)
    const { currentSet } = useAppSelector((state) => state.set)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchComponents())

    }, [])



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
                    {componentsList && componentsList.length > 0 ?
                        componentsList.map((component) => (
                            <ComponentsListItem
                                key={component.id}
                                item={component}
                                bordered
                                color='primary'
                                showPlus={true} />
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