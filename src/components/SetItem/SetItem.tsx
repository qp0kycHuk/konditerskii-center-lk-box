import React, { useEffect, useState, useRef } from 'react'
import { useDropdown } from '../../hooks/use-dropdown'
import { ISetComponent } from '../../models/ISetComponent'
import { ISetItem } from '../../models/ISetItem'
import { Button } from '../../ui/Button'
import { UiColors } from '../../ui/types'

import './SetItem.scss'

interface IProps {
    item: ISetItem 
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

export const SetItem = ({
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
}: IProps) => {

    const content = useRef(null)

    const { isOpen, toggle, styleHeight } = useDropdown(content)

    return (
        <div className={`set-item card ${bordered ? 'card--bordered' : ''} mb-4`}>
            <div className="set-item-preview print-wrapper">
                <div className="set-item__left">
                    {showCross ? (
                        <Button icon color={color} className='mb-2' {...(onCrossClick ? { onClick: onCrossClick } : {})}>
                            <svg className="icon"><use xlinkHref="img/icons.svg#cross" /></svg>
                        </Button>
                    ) : null}
                    {showPlus ? (
                        <Button icon color={color} className='mb-2' {...(onPlusClick ? { onClick: onPlusClick } : {})}>
                            <svg className="icon"><use xlinkHref="img/icons.svg#plus" /></svg>
                        </Button>
                    ) : null}
                    {showCheck ? (
                        <Button icon color={color} className='mb-2' {...(onCheckClick ? { onClick: onCheckClick } : {})}>
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
                            <button className="set-item-counter__btn set-item-counter__minus btn">-</button>
                            <input type="number" className="set-item-counter__input -count-" defaultValue={item.count} />
                            <button className="set-item-counter__btn set-item-counter__plus btn">+</button>
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
        </div>
    )
}