import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import userContext from './Context'
import { useState, useEffect } from 'react'

function App() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data))
  }, [])

  return (
    <>
      <Header />
      <userContext.Provider value={{ photos }}>
        <Routes>
          <Route path='/' element={<Photos />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </userContext.Provider>
    </>
  )
}

export default App
