import React, { useContext } from 'react'
import userContext from '../Context'
import useHover from '../hooks/useHover'

const CartItem = ({ item }) => {
  const [hovered, ref] = useHover()

  const { removeItem } = useContext(userContext)

  const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'
  return (
    <div className='cart-item'>
      <i
        onClick={() => removeItem(item.id)}
        className={iconClassName}
        ref={ref}
      ></i>
      <img src={item.url} width='130px' alt='cartPhoto' />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem
