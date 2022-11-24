import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@components/ui/Button'

import './SetList.scss'
import { SetListItem } from './SetListItem'

export const SetList = () => {

    return (
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
                    <SetListItem></SetListItem>
                </div>
            </div>
        </div>

    )
}