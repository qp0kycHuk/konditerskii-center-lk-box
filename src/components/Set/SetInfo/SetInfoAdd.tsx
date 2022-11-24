import React, { useEffect, useState } from 'react'
import { Button } from '@components/ui/Button';
import { SetItem } from '../SetItem/SetItem';
import './SetInfoAdd.scss';

export const SetInfoAdd = () => {
 
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
                    <SetItem
                        bordered
                        showCounter={false}
                        color='sec'
                        showPlus={true}
                        onPlusClick={() => console.log('onPlusClick!')} />
                </div>
            </div>
        </div>
    )
}