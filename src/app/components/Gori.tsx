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
            Poeta y escritora, ganó un concurso de Invocaciones con un cuentito que parecía brujería o un hechizo que parecía microrrelato. Vive en una pandilla de dos humanos, cuatro perros y cuatro amados fantasmas; uno de ellos grande, color naranja. Tiene formación en Lengua y Literatura, con un doctorado en Estudios Socioculturales. Se hizo acreedora de la Beca del Programa de Estímulo a la Creación y Desarrollo Artístico (PECDA, antes FECA) en México en tres emisiones, por los poemarios: Laberinto de niebla (2005), Poemas animales (2011) y, actualmente, por el poemario En la orilla. Poética de la marginalidad. Ganadora del Premio Dolores Castro de poesía 2023, con el libro Pandilla punk (IMAC, 2023).

            <p>
              Es fundadora del Colectivo Bestiario Mínimo y editora de la Revista Imagisaurio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

