import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../css/steps.css'
import { AppPassos } from './components/AppPassos'

function App() {
	return (
		<>
        <AppPassos />
		</>
	)
}

const container = document.querySelector('[data-js="root"]')
const born = ReactDOM.createRoot(container)
born.render(<App />)

export default App
