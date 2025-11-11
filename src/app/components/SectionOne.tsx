import React from "react";
import Image from "next/image";
import "./SectionOne.css";

export const SectionOne = () => {
  return (
    <div id="textos" className="section-one-wrapper">
      <div className="section-one-content">
        <div className="section-one-title">cartografías</div>

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
            <p className="image-caption">Avances de pueblos indígenas</p>
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
            <p className="image-caption">Luchas y derechos de los trabajadores</p>
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
            <p className="image-caption">Perspectivas feministas</p>
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
            <p className="image-caption">Movimientos contraculturales</p>
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
            <p className="image-caption">Comunidades migrantes y desplazamientos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

