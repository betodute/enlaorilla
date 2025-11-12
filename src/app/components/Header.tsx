import React from "react";
import Image from "next/image";
import "./Header.css";

export const Header = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title" aria-label="EN LA ORILLA">
            EN LA ORILLA
          </h1>
          <p className="hero-subtitle">poética de la marginalidad</p>
        </div>

        <div className="hero-image">
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
    </section>
  );
};





