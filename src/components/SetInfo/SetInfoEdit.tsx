import React, { useEffect, useState } from 'react'
import { Button } from '../../ui/Button';
import './SetInfoEdit.scss';

export const SetInfoEdit = () => {

    return (
        <div className="card dialog-large">
            <div className="set-modal-top">
                <div className="text-h1 text--center">Редактировать</div>

            </div>
            <div className="p-10">
                <div className="grid">
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
                                            <input type="text" className="form-input" placeholder="Поиск" />
                                        </div>
                                    </label>
                                </div>
                                <div className="grid-col-6">
                                    <label className="form-field">
                                        <div className="text--demibold mb-2">Масса 1-ой позиции, г.</div>
                                        <div className="form-input-cover">
                                            <input type="text" className="form-input" placeholder="Поиск" />
                                        </div>
                                    </label>
                                </div>
                                <div className="grid-col-6">
                                    <label className="form-field">
                                        <div className="text--demibold mb-2">Закупочная стоимость, руб</div>
                                        <div className="form-input-cover">
                                            <input type="text" className="form-input" placeholder="Поиск" />
                                        </div>
                                    </label>
                                </div>
                                <div className="grid-col-12">
                                    <label className="form-field">
                                        <div className="text--demibold mb-2">Комментарий</div>
                                        <div className="form-input-cover">
                                            <textarea className="form-input"></textarea>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-8 flex">
                                <Button>Изменить</Button>
                                <Button variant='light' className='ml-4'>Отмена</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}