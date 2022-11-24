import './App.scss';
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client';
import { setupStore } from './store/store';
import { App } from './App'

import ripple from 'npm-kit-ripple';


window.addEventListener('DOMContentLoaded', () => loadHandler())


function loadHandler() {
	ripple.init();
	ripple.attach('a.btn')
	ripple.attach('button.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')

	const store = setupStore()

	const $root = document.querySelector('#root')
	if ($root) {
		const root = ReactDOM.createRoot($root)

		root.render(
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}