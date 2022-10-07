import React from 'react'

const Image = ({ className, img }) => {
  return (
    <div className={`${className} image-container`}>
      <img src={img.url} className='image-grid' alt='photos' />
    </div>
  )
}

export default Image
