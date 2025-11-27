import React from 'react'
import Image from 'next/image'
import './Author.css'

export const Author = () => {
  return (
    <div className='author-wrapper'>
      <div className='author-content'>
        <div className='author-title'> Firstname Lastname </div>
        <div className='image-wrapper'>
          <Image className='author-image' src='/images/gloria-anzaldua.jpeg' width={400}
            height={600} />

        </div>
      </div>
    </div>
  )
}
