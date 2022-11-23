import React, { useEffect, useState } from 'react'
import { Button } from '../../ui/Button';
import './SetInfoItem.scss';

export const SetInfoItem = () => {
    
    return (
        <div className="set-info-item">
            <div className="text--demibold">Этикетка</div>
            <div className="set-info-block ready-element">
                <button className="set-info-block__edit"></button>
                <div className="set-info-block__img">
                    <img src="img/test.jpg" />
                </div>
                <div className="set-info-block__props">
                    <div className="set-info-block__prop">
                        <div className="fade-60 text-small-2">Масса</div>
                        <div className="text--demibold text-body-2">194 гр</div>
                    </div>
                    <div className="set-info-block__prop">
                        <div className="fade-60 text-small-2">Стоимость</div>
                        <div className="text--demibold text-body-2">243 руб</div>
                    </div>
                </div>
                <label className="form-field form-checkbox set-info-item__print-toggle">
                    <input type="checkbox" className="form-input-checkbox" name="set-item-1-print" />
                    <div className="form-toggle-target">
                        <div className="form-toggle-target-inner"></div>
                    </div>
                </label>
                <Button variant='white-bg' fab size='small' className="set-info-item__remove">
                    <svg className="icon"><use xlinkHref="img/icons.svg#cross" /></svg>
                </Button>
                
            </div>
        </div>
    )
}