import React, { useEffect, useState, useRef, FC } from 'react'
import { ISetItem } from '@src/models/ISetItem'
import { Button } from '@components/ui/Button'
import { useCounter } from '@src/hooks/use-counter'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { setSlice } from '@src/store/reducers/Set/SetSlice'
import { ISet } from '@src/models/ISet'
import { CandyRow, ISetItemRowProps } from '../CandyRow/CandyRow'
import { CandyCounter } from '../CandyCounter/CandyCounter'

interface IProps extends ISetItemRowProps {
    item: ISetItem
    initialCount?: number
}


export const SetCandiesItem: FC<IProps> = (props) => {
    const {
        item,
        color = 'primary',
        showCross = false,
        showPlus = false,
        showCheck = false,
        onCrossClick,
        onPlusClick,
        onCheckClick,
        bordered = false,
        initialCount = 0
    } = props


    return (
        <CandyRow {...props}
            buttonSlot={(<>
                <div className="set-item-img">
                    <div className={`set-item__weight bg-${color}`}>{item.weightSingle} г</div>
                    <img src={item.image} alt="" />
                </div>
                <div className="set-item-name text-body-0 text--bold">{item.title}</div>

                <CandyCounter initialCount={initialCount} item={item} />

                <div className="set-item-propertie">
                    <div className="text-small fade-80">Масса в наборе, г.</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value -clk-mass-">{item.weightSingle * item.count}</div>
                </div>
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Стоимость, руб</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value -clk-price-">{item.priceCandy * item.count}</div>
                </div>
                <div className="set-item-desc"> <b>Комментарий:</b> {item.comment} <br /> <b>Состав</b> {item.structure} </div>
            </>)}

            contentSlot={(<>
                <div className="text--demibold text-body-0"> Дополнительное описание </div>
                <div className="set-item-content__inner">
                    <label className="set-item-content__desc mb-5">
                        <b>Название:</b>
                        <textarea defaultValue={item.title} name="title"></textarea>
                    </label>
                    <div className="set-item__settings mb-5">
                        <div className="set-item-propertie">
                            <div className="text-small fade-80">Срок годности</div>
                            <input type="text" placeholder="0" defaultValue={item.period} name="period" />
                        </div>
                        <div className="set-item-propertie">
                            <div className="text-small fade-80">Масса одной позиции, г</div>
                            <input type="text" placeholder="0" defaultValue={item.weightSingle} name="weightSingle" />
                        </div>
                        <div className="set-item-propertie">
                            <div className="text-small fade-80">Масса блока (коробки), г.</div>
                            <input type="text" placeholder="0" defaultValue={item.weightBox} name="weightBox" />
                        </div>
                        <div className="set-item-propertie">
                            <div className="text-small fade-80">Стоимость коробки, руб</div>
                            <input type="text" placeholder="0" defaultValue={item.priceBox} name="priceBox" />
                        </div>
                        <div className="set-item-propertie">
                            <div className="text-small fade-80">Цена одной конфеты, руб</div>
                            <input type="text" placeholder="0" defaultValue={item.priceCandy} name="priceCandy" />
                        </div>
                    </div>
                    <label className="set-item-content__desc mb-5">
                        <b>Комментарий:</b>
                        <textarea defaultValue={item.comment} name="comment"></textarea>
                    </label>
                    <label className="set-item-content__desc mb-5">
                        <b>Состав:</b>
                        <textarea defaultValue={item.structure} name="structure"></textarea>
                    </label>
                    <div className="flex">
                        <Button>Сохранить</Button>
                        <Button variant='light' className='ml-4'>Удалить</Button>
                    </div>
                </div>
            </>)}
        />

    )
}

