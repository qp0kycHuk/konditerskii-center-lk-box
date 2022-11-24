import './App.scss';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './App'

import ripple from 'npm-kit-ripple';


window.addEventListener('DOMContentLoaded', () => loadHandler())


function loadHandler() {
	ripple.init();
	ripple.attach('a.btn')
	ripple.attach('button.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')

	const root = ReactDOM.createRoot(document.querySelector('#root'))

	root.render(<App />)
}