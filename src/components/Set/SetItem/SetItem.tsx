import React, { useEffect, useState, useRef, FC } from 'react'
import { useDropdown } from '@src/hooks/use-dropdown'
import { ISetComponent } from '@src/models/ISetComponent'
import { ISetItem } from '@src/models/ISetItem'
import { Button } from '@components/ui/Button'
import { UiColors } from '@components/ui/types'

import './SetItem.scss'
import { ICandy } from '@src/models/ICandy'
import { useCounter } from '@src/hooks/use-counter'

interface IProps {
    item: ICandy
    color?: UiColors
    showCross?: boolean
    showPlus?: boolean
    showCheck?: boolean
    onCrossClick?: (arg: any) => any
    onPlusClick?: (arg: any) => any
    onCheckClick?: (arg: any) => any
    showCounter?: boolean
    bordered?: boolean
}

export const SetItem: FC<IProps> = ({
    item,
    color = 'primary',
    showCross = false,
    showPlus = false,
    showCheck = false,
    onCrossClick,
    onPlusClick,
    onCheckClick,
    showCounter = true,
    bordered = false,
}) => {
    const [count, plus, minus] = useCounter(item.count)

    const content = useRef(null)
    const { isOpen, toggle, styleHeight } = useDropdown(content)

    const formRef = useRef(null)

    function onActionButtonClick(handler: (arg: any) => any) {
        return () => {
            if (formRef.current) {
                const formData = new FormData(formRef.current as HTMLFormElement)
                return handler(Object.fromEntries(formData))
            }
        }
    }

    return (
        <form ref={formRef} className={`set-item card ${bordered ? 'card--bordered' : ''} mb-4`}>
            <div className="set-item-preview">
                <div className="set-item__left">
                    {showCross ? (
                        <Button icon color={color} className='mb-2'
                            {...(onCrossClick ? { onClick: onActionButtonClick(onCrossClick) } : {})}>
                            <svg className="icon"><use xlinkHref="img/icons.svg#cross" /></svg>
                        </Button>
                    ) : null}
                    {showPlus ? (
                        <Button icon color={color} className='mb-2'
                            {...(onPlusClick ? { onClick: onActionButtonClick(onPlusClick) } : {})}>
                            <svg className="icon"><use xlinkHref="img/icons.svg#plus" /></svg>
                        </Button>
                    ) : null}
                    {showCheck ? (
                        <Button icon color={color} className='mb-2'
                            {...(onCheckClick ? { onClick: onActionButtonClick(onCheckClick) } : {})}>
                            <svg className="icon"><use xlinkHref="img/icons.svg#gal-ochka" /></svg>
                        </Button>
                    ) : null}
                </div>
                <div className="set-item-img">
                    <div className={`set-item__weight bg-${color}`}>{item.weight} г</div>
                    <img src={item.image} alt="" />
                </div>
                <div className="set-item-name text-body-0 text--bold">{item.title}</div>
                {showCounter ? (
                    <div className="set-item-counter">
                        <div className="set-item-counter__title">Кол-во шт.</div>
                        <div className="set-item-counter__block">
                            <Button className="set-item-counter__btn btn" color='text' variant='light' onClick={minus as any}>-</Button>
                            <input type="number" className="set-item-counter__input" name='count' value={count as any} onChange={(e) => { }} />
                            <Button className="set-item-counter__btn btn" color='text' variant='light' onClick={plus as any}>+</Button>
                        </div>
                    </div>
                ) : null}
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Масса в наборе, г.</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value -clk-mass-">6</div>
                </div>
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Стоимость, руб</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value -clk-price-">2.61</div>
                </div>
                <div className="set-item-desc"> <b>Комментарий:</b> {item.comment} <br /> <b>Состав</b> {item.structure} </div>
                <Button className="set-item-toggle" variant='light' fab onClick={() => toggle()}>
                    <svg className="icon" style={{ transform: isOpen ? 'rotateZ(-90deg)' : '' }}><use xlinkHref="img/icons.svg#to-right" /></svg>
                </Button>
            </div>
            <div className="set-item-content-cover" ref={content} style={styleHeight}>
                <div className="set-item-content">
                    <div className="text--demibold text-body-0"> Дополнительное описание </div>
                    <div className="set-item-content__inner">
                        <label className="set-item-content__desc mb-5">
                            <b>Название:</b>
                            <textarea defaultValue={item.title}></textarea>
                        </label>
                        <div className="set-item__settings mb-5">
                            <div className="set-item-propertie">
                                <div className="text-small fade-80">Срок годности</div>
                                <input type="text" placeholder="0" />
                            </div>
                            <div className="set-item-propertie">
                                <div className="text-small fade-80">Масса одной позиции, г</div>
                                <input type="text" placeholder="0" />
                            </div>
                            <div className="set-item-propertie">
                                <div className="text-small fade-80">Масса блока (коробки), г.</div>
                                <input type="text" placeholder="0" />
                            </div>
                            <div className="set-item-propertie">
                                <div className="text-small fade-80">Стоимость коробки, руб</div>
                                <input type="text" placeholder="0" />
                            </div>
                            <div className="set-item-propertie">
                                <div className="text-small fade-80">Цена одной конфеты, руб</div>
                                <input type="text" placeholder="0" />
                            </div>
                        </div>
                        <label className="set-item-content__desc mb-5">
                            <b>Комментарий:</b>
                            <textarea defaultValue={item.comment}></textarea>
                        </label>
                        <label className="set-item-content__desc mb-5">
                            <b>Состав:</b>
                            <textarea defaultValue={item.structure}></textarea>
                        </label>
                        <div className="flex">
                            <Button>Сохранить</Button>
                            <Button variant='light' className='ml-4'>Удалить</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export const SetItemPlaceholder: FC = () => {
    return (
        <div className='set-item set-item-placeholder card mb-4'>
            <div className="set-item-preview">
                <div className="set-item-img bg-l1"></div>
                <div className="set-item-name text-body-0 text--bold">
                    <div className='pb-6 bg-l1 flex'>
                        <div className="pl-10"></div>
                        <div className="pl-10"></div>
                        <div className="pl-10"></div>
                        <div className="pl-10"></div>
                        <div className="pl-10"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}