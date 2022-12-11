import React, { FC } from 'react'
import { Dialog } from '@src/components/Dialog/Dialog'
import { useDialog } from '@src/hooks/use-dialog'
import { ComponentsItem } from './ComponentsItem'
import { ComponentsList } from '../ComponentsList/ComponentsList'


export const Components: FC = () => {
    const [addDialogOpened, showAddDialog, closeAddDialog] = useDialog(false)
    
    return (<>
        <div className="set-info-list">

            <ComponentsItem />

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

        <Dialog isOpen={addDialogOpened} onClose={closeAddDialog}>
            <ComponentsList />
        </Dialog>
    </>)
}