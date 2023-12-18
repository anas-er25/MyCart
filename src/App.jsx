import './App.css'
import AppNavbar from './components/AppNavbar'
import Products from './components/Products'
import Cart from './components/Cart'
import {Routes, Route} from 'react-router-dom'

export default function App() {

  return (
    <div className="container mx-auto">
      <AppNavbar/>
     
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="Cart" element={<Cart/>}/>
      </Routes>
      </div>

  )
}