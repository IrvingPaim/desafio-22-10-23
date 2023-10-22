import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../css/date-counter.css'
import { AppCounter } from './components/AppCounter'

function App() {
	return (
		<>
        <AppCounter />
		</>
	)
}

const container = document.querySelector('[data-js="root"]')
const born = ReactDOM.createRoot(container)
born.render(<App />)

export default App
