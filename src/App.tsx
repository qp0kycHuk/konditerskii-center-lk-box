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

const set: ISet = {
	id: 1,
	image: 'img/test.jpg',
	title: 'Туба с Ёлкой',
	weight: 125,
	purchasePrice: 1000,
	comment: 'Комментарий',
}

export const App = () => {


	return (
		<ThemeProvider>
			<Header>
				<SetHeader />
			</Header>

			<section className="set-page">
				<div className="text-h1 text--demibold mb-10">Туба с Ёлкой</div>

				<ContactForm />

				<SetInfo />

				<div className="mb-5"></div>

				<SetItem
					color='sec'
					showCross={true}
					onCrossClick={() => console.log('onCrossClick!')} />

				<SetResult />
			</section>
		</ThemeProvider >
	)
}