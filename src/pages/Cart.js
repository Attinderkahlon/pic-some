import React, { useContext, useState } from 'react'
import CartItem from '../components/CartItem'
import userContext from '../Context'

const Cart = () => {
  const [btnText, setBtnText] = useState('Place Order')
  const { cartItems, emptyCart } = useContext(userContext)
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  const totalCost = 5.99 * cartItems.length
  const costDisplay = totalCost.toLocaleString('en-AU', {
    style: 'currency',
    currency: 'AUD',
  })

  const cartBtn = () => {
    setBtnText('Ordering')
    setTimeout(() => {
      setBtnText('Order Placed')
    }, 3000)
    emptyCart()
  }
  return (
    <main className='cart-page'>
      <h1>Check out</h1>

      {cartItemElements}

      <p className='total-cost'>Total: {costDisplay}</p>
      {cartItems.length > 0 ? (
        <div className='order-button'>
          <button onClick={cartBtn}>{btnText}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  )
}

export default Cart
