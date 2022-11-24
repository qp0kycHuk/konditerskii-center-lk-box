import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './hooks/use-theme'
import { SetPage } from './components/Set/SetPage'





export const App = () => {


	return (
		<ThemeProvider>
			

			<SetPage />

		</ThemeProvider >
	)
}