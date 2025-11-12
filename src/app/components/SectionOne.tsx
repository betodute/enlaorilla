import React from "react";
import Image from "next/image";
import "./SectionOne.css";

export const SectionOne = () => {
  return (
    <div id="textos" className="section-one-wrapper">
      <div className="section-one-content">

        <div className="section-one-title">
          Adelantos sobre <em>En la Orilla</em>, un poemario sobre la marginalidad
        </div>


        <div className="images-grid">
          <div className="image-card">
            <Image
              src="/images/avances-indigenas.webp"
              alt="Avances indígenas"
              width={1200}
              height={400}
              loading="lazy"
              className="image-item"
              sizes="(max-width: 640px) 92vw, 480px"
            />
            <p className="image-caption">Videolectura de un poema sobre las comunidades indígenas</p>
          </div>

          <div className="image-card">
            <Image
              src="/images/avances-trabajadores.webp"
              alt="Avances de trabajadores"
              width={1200}
              height={400}
              loading="lazy"
              className="image-item"
              sizes="(max-width: 640px) 92vw, 480px"
            />
            <p className="image-caption">Videolectura de un poema sobre las clases obreras</p>
          </div>

          <div className="image-card">
            <Image
              src="/images/avances-feminismos.webp"
              alt="Avances feminismos"
              width={1200}
              height={400}
              loading="lazy"
              className="image-item"
              sizes="(max-width: 640px) 92vw, 480px"
            />
            <p className="image-caption">Videolectura de un poema sobre femenismos</p>
          </div>

          <div className="image-card">
            <Image
              src="/images/avances-contracultura.webp"
              alt="Avances contracultura"
              width={1200}
              height={400}
              loading="lazy"
              className="image-item"
              sizes="(max-width: 640px) 92vw, 480px"
            />
            <p className="image-caption">Videolectura de un poema sobre los grupos contraculturales</p>
          </div>

          <div className="image-card">
            <Image
              src="/images/avances-migrantes.webp"
              alt="Avances migrantes"
              width={1200}
              height={400}
              loading="lazy"
              className="image-item"
              sizes="(max-width: 640px) 92vw, 480px"
            />
            <p className="image-caption">Videolectura de un poema sobre migrantes</p>
          </div>
        </div>
      </div>
    </div >
  );
};

