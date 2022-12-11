import React, { useEffect, useState, useRef, FC } from 'react'
import { ISetItem } from '@src/models/ISetItem'
import { Button } from '@components/ui/Button'
import { useCounter } from '@src/hooks/use-counter'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { setSlice } from '@src/store/reducers/Set/SetSlice'
import { ISet } from '@src/models/ISet'
import { CandyRow, ISetItemRowProps } from '../CandyRow/CandyRow'
import { ICandy } from '@src/models/ICandy'
import { CandyCounter } from '../CandyCounter/CandyCounter'
import { ISetComponent } from '@src/models/ISetComponent'

interface IProps extends ISetItemRowProps {
    item: ISetComponent
    initialCount?: number
}


export const ComponentsListItem: FC<IProps> = (props) => {
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

    const { currentSet } = useAppSelector((state) => state.set)
    const dispatch = useAppDispatch()




    // function addItem(item: ICandy, count: number) {
    //     dispatch(setSlice.actions.updateCandy({
    //         ...item,
    //         count: count
    //     }))
    // }

    // function removeItem(item: ICandy) {
    //     dispatch(setSlice.actions.removeCandy({
    //         ...item
    //     }))
    // }


    return (
        <CandyRow {...props}
            // onPlusClick={({ count }) => addItem(item, count)}
            // onCheckClick={() => removeItem(item)}

            buttonSlot={(<>
                <div className="set-item-img">
                    <div className={`set-item__weight bg-${color}`}>{item.weight} г</div>
                    <img src={item.image} alt="" />
                </div>
                <div className="set-item-name text-body-0 text--bold">{item.title}</div>

                <div className="set-item-propertie">
                    <div className="text-small fade-80">Масса, г.</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value -clk-mass-">{item.weight}</div>
                </div>
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Стоимость, руб</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value -clk-price-">{item.price}</div>
                </div>
                <div className="set-item-desc"> <b>Комментарий:</b> {item.comment} </div>
            </>)}

            contentSlot={(<>
                <div></div> { /* empty div for correct grid view */}
                <div className="set-item-content__inner">
                    <label className="set-item-content__desc mb-5">
                        <b>Название:</b>
                        <textarea defaultValue={item.title} name="title"></textarea>
                    </label>
                    <div className="set-item__settings mb-5">
                        <div className="set-item-propertie">
                            <div className="text-small fade-80">Масса, г</div>
                            <input type="text" placeholder="0" defaultValue={item.weight} name="weight" />
                        </div>
                        <div className="set-item-propertie">
                            <div className="text-small fade-80">Стоимость, руб</div>
                            <input type="text" placeholder="0" defaultValue={item.price} name="price" />
                        </div>
                    </div>
                    <label className="set-item-content__desc mb-5">
                        <b>Комментарий:</b>
                        <textarea defaultValue={item.comment} name='comment'></textarea>
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

