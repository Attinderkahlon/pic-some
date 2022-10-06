import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Photos from './pages/Photos'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Photos />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
