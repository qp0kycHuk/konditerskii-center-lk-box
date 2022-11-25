import React, { useEffect, useState, useRef, FC } from 'react'
import { Button } from '@components/ui/Button'

import './SetListItem.scss'
import { ISet } from '@src/models/ISet'
import { useDialog } from '@src/hooks/use-dialog'
import { Dialog } from '@src/components/Dialog/Dialog'
import { SetEdit } from '../SetEdit/SetEdit'

interface IProps {
    item: ISet
}

export const SetListItem: FC<IProps> = ({ item }) => {
    const [editDialogOpened, showEditDialog, closeEditDialog] = useDialog(false)


    return (<>
        <div className="set-ready-item card card--bordered mb-3">
            <div className="set-ready-item__img">
                <img src={item.image} alt="" />
            </div>
            <div className="set-ready-item__title">
                <div>{item.title}</div>
            </div>
            <div className="set-ready-item__props">
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Масса, г</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value " id="mass">{item.weight}</div>
                </div>
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Стоимость, руб</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value" id="cost">{item.purchasePrice}</div>
                </div>
                <div className="set-item-propertie">
                    <div className="text-small fade-80">Количество конфет, шт</div>
                    <div className="divider"></div>
                    <div className="set-item-propertie__value" id="count">{item.items?.length}</div>
                </div>
            </div>
            <Button fab variant='contur' className="set-ready-item__edit" onClick={showEditDialog}>
                <svg className="icon"><use xlinkHref="img/icons.svg#edit" /></svg>
            </Button>
        </div>

        <Dialog isOpen={editDialogOpened} onClose={closeEditDialog}>
            <SetEdit item={item} />
        </Dialog>
    </>)
}

export const SetListItemPlaceholder: FC = () => {
    return (
        <div className="set-ready-item card card--bordered set-ready-item-placeholder mb-3">
            <div className="set-ready-item__img bg-l1"> </div>
            <div className="set-ready-item__title">
                <div className='pb-6 bg-l1 flex'>
                    <div className="pl-10"></div>
                    <div className="pl-10"></div>
                    <div className="pl-10"></div>
                    <div className="pl-10"></div>
                    <div className="pl-10"></div>
                </div>
            </div>
        </div>
    )
}