import React, { useEffect, useState, useRef } from 'react'
import { Button } from '../../ui/Button'

import './SetListItem.scss'

export const SetListItem = () => {
    return (
        <div class="set-ready-item">
            <div class="set-ready-item__img">
                <a href="?ID=9648"> <img src="img/test.jpg" alt="" /> </a>
            </div>
            <div class="set-ready-item__title">
                <a href="?ID=9648">Туба с Ёлкой</a>
            </div>
            <div class="set-ready-item__props">
                <div class="set-item-propertie">
                    <div class="text-small fade-80">Масса, г</div>
                    <div class="divider"></div>
                    <div class="set-item-propertie__value " id="mass">500</div>
                </div>
                <div class="set-item-propertie">
                    <div class="text-small fade-80">Стоимость, руб</div>
                    <div class="divider"></div>
                    <div class="set-item-propertie__value" id="cost">694.51</div>
                </div>
                <div class="set-item-propertie">
                    <div class="text-small fade-80">Количество конфет, шт</div>
                    <div class="divider"></div>
                    <div class="set-item-propertie__value" id="count">34</div>
                </div>
            </div>
            <div class="o-btn o-btn-edit -edit-box-"></div>
        </div>
    )
}