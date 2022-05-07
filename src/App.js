import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'

// Pages
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
