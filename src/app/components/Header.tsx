import React from 'react'
import Image from 'next/image'
import './Header.css'

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        EN LA ORILLA
      </div>
      <div className="header-subtitle">
        poética de la marginalidad
      </div>
      <div className="header-image-wrapper">
        <Image
          className="header-image"
          src="/images/poetry-margins-header.webp"
          alt="header image"
          width={1200}
          height={600}
          priority
        />
      </div>
    </div>
  )
}
