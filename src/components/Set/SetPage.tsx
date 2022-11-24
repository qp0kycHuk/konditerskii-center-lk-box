import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { setSlice } from '@src/store/reducers/SetSlice'
import React, { useEffect } from 'react'
import { ISet } from '../../models/ISet'
import { fakeSetItem } from '../../service/fake'
import { ContactForm } from '../ContactForm/ContactForm'
import { Header } from '../Header/Header'
import { SetHeader } from './SetHeader/SetHeader'
import { SetInfo } from './SetInfo/SetInfo'
import { SetItem } from './SetItem/SetItem'
import { SetResult } from './SetResult/SetResult'


const initialSet: ISet = {
    id: '1',
    image: 'img/test.jpg',
    title: 'Туба с Ёлкой',
    weight: 125,
    purchasePrice: 1000,
    comment: 'Комментарий',
    items: new Array(5).fill(1).map(fakeSetItem)
}
console.log(JSON.stringify(new Array(25).fill(1).map(fakeSetItem)));


export const SetPage = () => {
    // Получаем данные из state
    const { currentSet } = useAppSelector((state) => state.setReducer)
    // Action creator для обновления текущего набора
    const { initCurrentSet } = setSlice.actions
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initCurrentSet(initialSet))
    }, [])


    return (<>
        <Header>
            <SetHeader />
        </Header>

        <section className="set-page">
            {currentSet ? (<>
                <div className="text-h1 text--demibold mb-10">{currentSet.title}</div>

                <ContactForm />

                <SetInfo item={currentSet} />

                <div className="mb-5"></div>

                {currentSet.items.map((el) => (
                    <SetItem
                        key={el.id}
                        item={el}
                        color='sec'
                        showCross={true}
                        onCrossClick={() => console.log('onCrossClick!')} />
                ))}


                <SetResult />

            </>) : <div className="text-h1 text--demibold mb-10">Загрузка..</div>}
        </section>

    </>)
}