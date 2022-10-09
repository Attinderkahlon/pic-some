import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import userContext from '../Context'

function Header() {
  const { cartItems } = useContext(userContext)

  const cartClass =
    cartItems.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'

  console.log(cartItems.length)
  return (
    <header>
      <Link to='/'>
        <h2>Pic Some</h2>
      </Link>
      <Link to='/cart'>
        <i className={`${cartClass} ri-fw ri-2x`}></i>
      </Link>
    </header>
  )
}

export default Header
