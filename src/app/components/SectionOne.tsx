import React from 'react'
import Image from 'next/image'
import './SectionOne.css'

export const SectionOne = () => {
  return (
    <div id='textos' className='section-one-wrapper'>
      <div className='section-one-content'>
        <div className='section-one-title'>
          cartografías de la periferia
        </div>
        
        <div className='images-wrapper'>


          <div className="images-row">
            <Image
              src="/images/avances-indigenas.webp"
              alt="EDIT THIS ALT"
              width={1200}
              height={400}
              loading="lazy"
              className="footer-logo"
              sizes="(max-width: 640px) 92vw, 480px"
            />
          </div>

          <div className="images-row">
            <Image
              src="/images/avances-trabajadores.webp"
              alt="EDIT THIS ALT"
              width={1200}
              height={400}
              loading="lazy"
              className="footer-logo"
              sizes="(max-width: 640px) 92vw, 480px"
            />
          </div>

          <div className="images-row">
            <Image
              src="/images/avances-feminismos.webp"
              alt="EDIT THIS ALT"
              width={1200}
              height={400}
              loading="lazy"
              className="footer-logo"
              sizes="(max-width: 640px) 92vw, 480px"
            />
          </div>

          <div className="images-row">
            <Image
              src="/images/avances-contracultura.webp"
              alt="EDIT THIS ALT"
              width={1200}
              height={400}
              loading="lazy"
              className="footer-logo"
              sizes="(max-width: 640px) 92vw, 480px"
            />
          </div>

          <div className="images-row">
            <Image
              src="/images/avances-migrantes.webp"
              alt="EDIT THIS ALT"
              width={1200}
              height={400}
              loading="lazy"
              className="footer-logo"
              sizes="(max-width: 640px) 92vw, 480px"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
