import React from 'react'
import { ISet } from '../../models/ISet'
import { fakeSetItem } from '../../service/fake'
import { ContactForm } from '../ContactForm/ContactForm'
import { Header } from '../Header/Header'
import { SetHeader } from './SetHeader/SetHeader'
import { SetInfo } from './SetInfo/SetInfo'
import { SetItem } from './SetItem/SetItem'
import { SetResult } from './SetResult/SetResult'


const currentSet: ISet = {
    id: '1',
    image: 'img/test.jpg',
    title: 'Туба с Ёлкой',
    weight: 125,
    purchasePrice: 1000,
    comment: 'Комментарий',
    items: new Array(5).fill(1).map(fakeSetItem)
}


// const setItems: ISetItem[] = [
// 	{
// 		id: '1',
// 		image: 'img/test.jpg',
// 		title: 'Тебе и Мне 1',
// 		weight: 6,
// 		purchasePrice: 15,
// 		comment: 'Комментарий',
// 		count: 1,
// 		structure: 'Состав'
// 	},
// ]

export const SetPage = () => {

    return (<>
        <Header>
            <SetHeader />
        </Header>

        <section className="set-page">
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
        </section>
    </>)
}