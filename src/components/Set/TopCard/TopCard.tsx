import React, { useEffect, useState } from 'react'
import { ComponentsItem } from '../Components/ComponentsItem'
import { Button } from '@components/ui/Button';
import { Dialog } from '@components/Dialog/Dialog';
import { CandiesList } from '../CandiesList/CandiesList';
import { Edit } from '../Edit/Edit';
import { useDialog } from '@src/hooks/use-dialog';
import { ISet } from '@src/models/ISet';

import './TopCard.scss';
import { Components } from '../Components/Components';

interface IProps {
    item: ISet
}

export const TopCard = ({ item }: IProps) => {
    
    const [editDialogOpened, showEditDialog, closeEditDialog] = useDialog(false)




    return (<>
        <div className="set-info card">
            <div className="set-info__left">
                <div className="set-info-block">
                    <div className="set-info-block__img set-info-block__img_main">
                        <img src={item.image} />
                    </div>
                    <div className="set-info-block__props">
                        <div className="set-info-block__prop">
                            <div className="fade-60 text-small">Масса</div>
                            <div className="text--demibold">{item.weight} гр</div>
                        </div>
                        <div className="set-info-block__prop">
                            <div className="fade-60 text-small">Стоимость</div>
                            <div className="text--demibold">{item.purchasePrice} руб</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="set-info__content">
                <div className="text-h2 mb-8">{item.title}</div>

                <Components />
            </div>
            <Button fab variant='contur' className="set-info__edit" onClick={showEditDialog}>
                <svg className="icon"><use xlinkHref="img/icons.svg#edit" /></svg>
            </Button>
        </div>

        <Dialog isOpen={editDialogOpened} onClose={closeEditDialog}>
            <Edit item={item} />
        </Dialog>
    </>)
}