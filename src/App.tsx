import React, { useEffect, useState } from 'react'
import { ContactForm } from './components/ContactForm/ContactForm'
import { Header } from './components/Header/Header'
import { SetResult } from './components/SetResult/SetResult'
import { SetHeader } from './components/SetHeader/SetHeader'
import { SetInfo } from './components/SetInfo/SetInfo'
import { SetItem } from './components/SetItem/SetItem'
import { ThemeProvider } from './hooks/use-theme'
import { Button } from './ui/Button'
import { ISet } from './models/ISet'
import { ISetItem } from './models/ISetItem'
import { fakeSetItem } from './service/fake'

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

export const App = () => {


	return (
		<ThemeProvider>
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
		</ThemeProvider >
	)
}