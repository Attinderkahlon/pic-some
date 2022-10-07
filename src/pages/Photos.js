import React, { useContext } from 'react'
import userContext from '../Context'
import Image from '../components/Image'
import { getClass } from '../utils'

const Photos = () => {
  const { photos } = useContext(userContext)
  return (
    <main className='photos'>
      {photos.map((photo, index) => {
        return <Image key={photo.id} img={photo} className={getClass(index)} />
      })}
    </main>
  )
}

export default Photos
