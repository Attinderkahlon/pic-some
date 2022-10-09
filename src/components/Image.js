import React, { useContext } from 'react'
import useHover from '../hooks/useHover'

import PropTypes from 'prop-types'

import userContext from '../Context'

const Image = ({ className, img }) => {
  const [hovered, ref] = useHover()
  const { toggleFavorite, addToCart, cartItems, removeItem } =
    useContext(userContext)

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className='ri-heart-fill favorite'
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )
    } else if (hovered) {
      return (
        <i
          className='ri-heart-line favorite'
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id)
    if (alreadyInCart) {
      return (
        <i
          className='ri-shopping-cart-fill cart'
          onClick={() => removeItem(img.id)}
        ></i>
      )
    } else if (hovered) {
      return (
        <i
          className='ri-add-circle-line cart'
          onClick={() => addToCart(img)}
        ></i>
      )
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} alt='photos' className='image-grid' />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
}

export default Image
