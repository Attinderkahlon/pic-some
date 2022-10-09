import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import userContext from './Context'
import { useState, useEffect } from 'react'

function App() {
  const [photos, setPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data))
  }, [])

  function toggleFavorite(id) {
    const updatedArr = photos.map((photo) => {
      if (photo.id === id) {
        console.log(id)
        console.log(!photo.isFavorite)

        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })

    setPhotos(updatedArr)
  }

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem])
  }

  function removeItem(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const emptyCart = () => {
    setCartItems([])
  }

  return (
    <>
      <userContext.Provider
        value={{
          photos,
          toggleFavorite,
          addToCart,
          cartItems,
          removeItem,
          emptyCart,
        }}
      >
        <Header />
        <Routes>
          <Route path='/' element={<Photos />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </userContext.Provider>
    </>
  )
}

export default App
