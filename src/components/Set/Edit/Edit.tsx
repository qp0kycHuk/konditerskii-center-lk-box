import React, { FormEvent, useEffect, useState } from 'react'
import { ISet } from '@src/models/ISet';
import { Button } from '@components/ui/Button';
import { useAppDispatch, useAppSelector } from '@src/hooks/redux';
import { updateSet } from '@src/store/reducers/Set/SetActions';

import './Edit.scss';


interface IProps {
    item: ISet
}

export const Edit = ({ item }: IProps) => {
    const { currentSet, updateLoading, updateError } = useAppSelector((state) => state.set)
    const dispatch = useAppDispatch()

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)

        const data = {
            ...item,
            ...Object.fromEntries(formData)
        }

        dispatch(updateSet(data as ISet))
    }

    return (
        <div className="card dialog-large">
            <div className="set-modal-top">
                <div className="text-h1 text--center">Редактировать</div>
            </div>
            <div className="p-10">
                <form onSubmit={submitHandler} className="grid">
                    <div className="grid-col-5">
                        // image input
                    </div>
                    <div className="grid-col-7">
                        <div className="form">
                            <div className="grid grid-spacing-8">
                                <div className="grid-col-12">
                                    <label className="form-field">
                                        <div className="text--demibold mb-2">Название позиции</div>
                                        <div className="form-input-cover">
                                            <input type="text" className="form-input" name="title" defaultValue={item.title} />
                                        </div>
                                    </label>
                                </div>
                                <div className="grid-col-6">
                                    <label className="form-field">
                                        <div className="text--demibold mb-2">Масса 1-ой позиции, г.</div>
                                        <div className="form-input-cover">
                                            <input type="text" className="form-input" name="weight" defaultValue={item.weight} />
                                        </div>
                                    </label>
                                </div>
                                <div className="grid-col-6">
                                    <label className="form-field">
                                        <div className="text--demibold mb-2">Закупочная стоимость, руб</div>
                                        <div className="form-input-cover">
                                            <input type="text" className="form-input" name="purchasePrice" defaultValue={item.purchasePrice} />
                                        </div>
                                    </label>
                                </div>
                                <div className="grid-col-12">
                                    <label className="form-field">
                                        <div className="text--demibold mb-2">Комментарий</div>
                                        <div className="form-input-cover">
                                            <textarea className="form-input" name="comment" defaultValue={item.comment}></textarea>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-8 flex">
                                <Button type='submit' disabled={updateLoading}>{
                                    updateLoading ? <div className='progress progress-circle'></div> : 'Изменить'
                                }</Button>
                                <Button variant='light' className='ml-4' type='reset'>Отмена</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}