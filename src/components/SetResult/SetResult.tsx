import React, { useEffect, useState } from 'react'
import { Button } from '../../ui/Button'

import './SetResult.scss'

export const SetResult = () => {

    return (<>
        <div className="set-itog">
            <div className="text-subtitle-2 text--bold mr-5">Итоговые параметры позиций в наборе:</div>
            <div className="set-itog__props">
                <div className="set-itog__prop">
                    <div className="text-small-2"> Кол-во шт:</div>
                    <span className="global_count">34</span>
                </div>
                <div className="set-itog__prop">
                    <div className="text-small-2"> Масса,гр:</div>
                    <div className="text-body-0 text--bold" >500</div>
                </div>
                <div className="set-itog__prop">
                    <div className="text-small-2"> Итого,руб:</div>
                    <div className="text-body-0 text--bold" >325.16</div>
                </div>
            </div>
            <div className="flex ml-auto">
                <Button icon variant='light' color='white' className="mr-2">
                    <svg className="icon"><use xlinkHref="img/icons.svg#save" /></svg>
                </Button>
                <Button variant='light' color='white' className="mr-2">
                    <svg className="icon mr-3"><use xlinkHref="img/icons.svg#save" /></svg>
                    Сохранить как
                </Button>
                <Button variant='white-bg' >
                    <svg className="icon mr-3"><use xlinkHref="img/icons.svg#print" /></svg>
                    Печать
                </Button>
            </div>

        </div>
        <div className="set-result">
            <Button size='large' > Редактировать набор  </Button>
            <div className="set-result-block">
                <div className="set-result__props">
                    <div className="set-result__prop">Нетто, г: <span className="netto_itog">500</span></div>
                    <div className="set-result__prop">Брутто, г: <span className="brutto_itog">696</span></div>
                    <div className="set-result__prop">Закупочная цена: <span className="cost_itog">578.76 Руб</span></div>
                </div>

                <div className="set-result__fields">
                    <div className="set-result__field">
                        <span>Наценка в %</span>
                        <input className="set-result__input tax" type="number" data-input-round="2" />
                    </div>
                    <div className="set-result__field">
                        <span>Наценка руб</span>
                        <input className="set-result__input taxplus" id="tax" type="text" readOnly data-input-round="2" />
                    </div>
                </div>

                <div className="set-result__itog ">
                    <span className="text-subtitle-2">Итоговая стоимость </span>
                    <span className="text-h6 text--bold color-primary"> 694.51 руб.</span>
                </div>
            </div>
        </div>
    </>)
}