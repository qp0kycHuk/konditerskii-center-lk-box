import React, { useEffect, useState } from 'react'
import { useDialog } from '@src/hooks/use-dialog';
import { Button } from '@components/ui/Button';
import { Dialog } from '@components/Dialog/Dialog';
import { SetList } from '../SetList/SetList';

export const SetHeader = () => {
    const [listDialogOpened, showListDialog, closeListDialog] = useDialog(false)
    
    return (<>
        <div className="flex">
            <Button icon className="mr-3"><img src="img/icons/candy-plus.png" alt="" /></Button>
            <Button icon className="mr-3"><img src="img/icons/wallet-plus.png" alt="" /></Button>
            <Button icon className="mr-3"><img src="img/icons/box-plus.png" alt="" /></Button>

        </div>
        <div className="flex mx-auto">
            <Button onClick={showListDialog}>Готовые наборы 8</Button>
            <Button variant='light' icon className="ml-3">
                <span className="text-h2 text--meium">+</span>
            </Button>
        </div>

        <Dialog isOpen={listDialogOpened} onClose={closeListDialog}>
            <SetList />
        </Dialog>
    </>)
}