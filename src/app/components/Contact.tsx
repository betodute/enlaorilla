import React from 'react'
import Image from 'next/image'
import './Contact.css'

export const Contact = () => {
  return (
    <div id='contact' className='contact-wrapper'>
      <div className='contact-content'>

        <div className='contact-text-wrapper'>
          <div className='contact-title'>
            Exhibit: 001
          </div>
          <div className='contact-subtitle'>
            This is a subtitle.
          </div>
        </div>

        <div className='contact-image-wrapper'>
          <Image
            src="/images/libro-elo.webp"
            alt="Avances de trabajadores"
            width={1200}
            height={400}
            loading="lazy"
            className="contact-image"
            sizes="(max-width: 640px) 92vw, 360px"
          />
        </div>

      </div>
    </div>
  )
}
