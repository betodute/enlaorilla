import React from 'react'
import Image from 'next/image'
import './Gori.css'

export const Gori = () => {
  return (
    <section className='section gori-section section--green'>
      <div className='gori-wrapper'>
        <div className='gori-image-wrapper'>
          <Image
            className='gori-image'
            src='/images/eli-gori.webp'
            alt='Elizabeth Gori'
            width={400}
            height={600}
          />
          <div className='gori-image-caption'>
            Foto por Photographer Face
          </div>
        </div>
        <div className='gori-text-wrapper'>
          <div className='gori-title'>
            Elizabeth Gori
          </div>
          <div className='gori-text-content'>
            Elizabeth Gori is a poet and writer whose work explores themes of identity, marginality, and the human experience. Her poetry is known for its emotional depth and lyrical beauty, often drawing from personal experiences and cultural heritage. Gori has published several collections of poetry and has been recognized for her contributions to contemporary literature.
          </div>
        </div>
      </div>
    </section>
  )
}

