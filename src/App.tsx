import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './hooks/use-theme'
import { SetPage } from './components/Set/SetPage'
import { useAppSelector } from './hooks/redux'






export const App = () => {

	return (
		<ThemeProvider>
			<SetPage />
		</ThemeProvider >
	)
}