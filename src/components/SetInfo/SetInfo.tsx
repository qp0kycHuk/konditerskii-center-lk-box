import React, { useEffect, useState } from 'react'
import { SetInfoItem } from './SetInfoItem'
import './SetInfo.scss';
import { Button } from '../../ui/Button';
import { Dialog } from '../Dialog/Dialog';
import { SetInfoAdd } from './SetInfoAdd';
import { SetInfoEdit } from './SetInfoEdit';
import { useDialog } from '../../hooks/use-dialog';

export const SetInfo = () => {
    const [addDialogOpened, showAddDialog, closeAddDialog] = useDialog(false)
    const [editDialogOpened, showEditDialog, closeEditDialog] = useDialog(false)



    return (<>
        <div className="set-info card">
            <div className="set-info__left">
                <div className="set-info-block">
                    <div className="set-info-block__img set-info-block__img_main">
                        <img src="img/test.jpg" />
                    </div>
                    <div className="set-info-block__props">
                        <div className="set-info-block__prop">
                            <div className="fade-60 text-small">Масса</div>
                            <div className="text--demibold">194 гр</div>
                        </div>
                        <div className="set-info-block__prop">
                            <div className="fade-60 text-small">Стоимость</div>
                            <div className="text--demibold">243 руб</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="set-info__content">
                <div className="text-h2 mb-8">Туба с Ёлкой</div>
                <div className="set-info-list">

                    <SetInfoItem />

                    <div className="set-info-item">
                        <div className="set-info-item__title"></div>
                        <button className="set-info-block set-info-block--add waved" onClick={showAddDialog}>
                            <div>
                                <div className="btn btn--primary btn--fill btn-fab btn-small mb-3 mx-auto">
                                    <div className="text-h6">+</div>
                                </div>
                                <span className="text-small fade-60">Добавить</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <Button fab variant='contur' className="set-info__edit" onClick={showEditDialog}>
                <svg className="icon"><use xlinkHref="img/icons.svg#edit" /></svg>
            </Button>
        </div>

        <Dialog isOpen={addDialogOpened} onClose={closeAddDialog}>
            <SetInfoAdd />
        </Dialog>

        <Dialog isOpen={editDialogOpened} onClose={closeEditDialog}>
            <SetInfoEdit />
        </Dialog>
    </>)
}