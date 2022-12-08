import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { fetchSetById } from '@src/store/reducers/Set/SetActions'
import { ISet } from '../../models/ISet'
import { fakeSetItem } from '../../service/fake'
import { ContactForm } from '../ContactForm/ContactForm'
import { Header } from '../Header/Header'
import { SetHeader } from './SetHeader/SetHeader'
import { TopCard } from './TopCard/TopCard'
import { CandiesListItem } from './CandiesList/CandiesListItem'
import { Result } from './Result/Result'
import { Button } from '../ui/Button'
import { useDialog } from '@src/hooks/use-dialog'
import { Dialog } from '../Dialog/Dialog'
// import { CandiesList } from './CandiesList/CandiesList'
import { Id as toastId, toast } from 'react-toastify';
import { SAVING_IN_PROGRESS_MESSAGE, SAVING_SUCCESS_MESSAGE } from '@src/const/Messages'
import { SetCandies } from './SetCandies/SetCandies'
import { CandiesList } from './CandiesList/CandiesList'



export const SetPage = () => {
    const [addDialogOpened, showAddDialog, closeAddDialog] = useDialog(false)
    // Получаем данные из state

    const { currentSet, getLoading, getError, updateLoading, updateError } = useAppSelector((state) => state.set)
    // Action creator для обновления текущего набора
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSetById('1'))

    }, [])

    useEffect(() => {
        let id: toastId


        if (updateLoading) {
            id = toast.loading(SAVING_IN_PROGRESS_MESSAGE)

        }

        return () => {
            if (id) {
                toast.update(id, {
                    render: updateError ? updateError : SAVING_SUCCESS_MESSAGE,
                    type: updateError ? 'error' : 'success',
                    isLoading: false,
                    autoClose: 2000,
                    delay: 1000
                });
            }
        }
    }, [updateLoading])



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

                <TopCard item={currentSet} />

                <div className="mb-5"></div>

                {currentSet.items?.length > 0 ?
                    <SetCandies /> :
                    <Button variant='light' size='large' className='w-100' onClick={showAddDialog}>Добавить позицию</Button>
                }

                <Result showAddDialog={showAddDialog} />

            </>) : null}
        </section>

        <Dialog isOpen={addDialogOpened} onClose={closeAddDialog}>
            <CandiesList />
        </Dialog>
    </>)
}