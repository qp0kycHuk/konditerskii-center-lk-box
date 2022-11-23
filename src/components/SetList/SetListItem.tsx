import React, { useEffect, useState, useRef } from 'react'
import { Button } from '../../ui/Button'

import './SetListItem.scss'

export const SetListItem = () => {
    return (
        <div className="set-ready-item">
            <div className="set-ready-item__img">
                <a href="?ID=9648"> <img src="img/test.jpg" alt="" /> </a>
            </div>
            <div className="set-ready-item__title">
                <a href="?ID=9648">Туба с Ёлкой</a>
            </div>
            <div className="set-ready-item__props">
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Масса, г</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value " id="mass">500</div>
                </div>
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Стоимость, руб</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value" id="cost">694.51</div>
                </div>
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Количество конфет, шт</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value" id="count">34</div>
                </div>
            </div>
            <Button fab variant='contur' className="set-ready-item__edit">
                <svg className="icon"><use xlinkHref="img/icons.svg#edit" /></svg>
            </Button>
            <div className="o-btn o-btn-edit -edit-box-"></div>
        </div>
    )
}