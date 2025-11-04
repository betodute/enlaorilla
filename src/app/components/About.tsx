"use client";

import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section id="proyecto" className="about-wrapper">
      <div className="about-content">
        <h2 className="about-title">
          Proyecto de escritura que habita los márgenes para interpelar el centro.
        </h2>

        <p className="about-text">
          Explora las voces históricamente relegadas: pueblos indígenas, clases trabajadoras, migrantes, movimientos feministas y grupos contraculturales.
          Desde una poética crítica y rupturista, busca visibilizar las experiencias que resisten al discurso dominante.
          El resultado: un poemario que construye una cartografía simbólica de exclusión y resistencia.
          No es solo literatura: es una intervención estética y política.
          Un archivo vivo donde la palabra enfrenta el silencio.
          Una apuesta por nombrar lo que se quiso borrar.
          Una voz colectiva desde la orilla.
        </p>
      </div>
    </section>
  );
};


