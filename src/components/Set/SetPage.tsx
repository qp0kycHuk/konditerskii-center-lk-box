import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { fetchSetById } from '@src/store/reducers/Set/SetActions'
import { ISet } from '../../models/ISet'
import { fakeSetItem } from '../../service/fake'
import { ContactForm } from '../ContactForm/ContactForm'
import { Header } from '../Header/Header'
import { SetHeader } from './SetHeader/SetHeader'
import { SetInfo } from './SetInfo/SetInfo'
import { SetItem } from './SetItem/SetItem'
import { SetResult } from './SetResult/SetResult'
import { Button } from '../ui/Button'
import { useDialog } from '@src/hooks/use-dialog'
import { Dialog } from '../Dialog/Dialog'
import { SetInfoAdd } from './SetInfoAdd/SetInfoAdd'


const initialSet: ISet = {
    id: '1',
    image: 'img/test.jpg',
    title: 'Туба с Ёлкой',
    weight: 125,
    purchasePrice: 1000,
    comment: 'Комментарий',
    items: new Array(5).fill(1).map(fakeSetItem)
}


export const SetPage = () => {
    const [addDialogOpened, showAddDialog, closeAddDialog] = useDialog(false)
    // Получаем данные из state
    const { currentSet, getLoading, getError } = useAppSelector((state) => state.set)
    // Action creator для обновления текущего набора
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSetById(1))

    }, [])


    return (<>
        <Header>
            <SetHeader />
        </Header>

        <section className="set-page">
            {getLoading && 'Загрузка'}
            {getError && getError}
            {currentSet ? (<>
                <div className="text-h1 text--demibold mb-10">{currentSet.title}</div>

                <ContactForm />

                <SetInfo item={currentSet} />

                <div className="mb-5"></div>

                {currentSet.items?.length > 0 ?
                    currentSet.items.map((el) => (
                        <SetItem
                            key={el.id}
                            item={el}
                            color='sec'
                            showCross={true}
                            onCrossClick={() => console.log('onCrossClick!')} />
                    )) :
                    <Button variant='light' size='large' className='w-100' onClick={showAddDialog}>Добавить позицию</Button>
                }

                <SetResult showAddDialog={showAddDialog} />

            </>) : null}
        </section>

        <Dialog isOpen={addDialogOpened} onClose={closeAddDialog}>
            <SetInfoAdd />
        </Dialog>
    </>)
}