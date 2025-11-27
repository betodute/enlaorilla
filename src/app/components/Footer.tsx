"use client";

import React from "react";
import Image from "next/image";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-lede">
          Este proyecto fue realizado con el apoyo del Sistema de Apoyos a la
          Creación y Proyectos Culturales, a través del PECDA Aguascalientes,
          emisión 2025.
        </p>

        {/* 🌿 Unified white card for logos + separators */}
        <div className="footer-card">

          <div className="footer-row footer-fed">
            <Image
              src="/images/official-logo-gov.webp"
              alt="Logotipo PECDA (federal)"
              width={1200}
              height={400}
              loading="lazy"
              className="footer-logo"
              sizes="(max-width: 640px) 92vw, 480px"
              style={{ maxWidth: "640px" }}
            />
          </div>

          <div className="footer-sep footer-sep--green" aria-hidden="true">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>

          <div className="footer-row">
            <Image
              src="/images/official-logo-state-two.png"
              alt="Logotipo PECDA (estatal Aguascalientes) A"
              width={1200}
              height={400}
              loading="lazy"
              className="footer-logo"
              sizes="(max-width: 640px) 92vw, 480px"
            />
          </div>

          <div className="footer-sep footer-sep--red" aria-hidden="true">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>

          <div className="footer-row footer-last">
            <Image
              src="/images/official-logo-state.webp"
              alt="Logotipo PECDA (estatal Aguascalientes) B"
              width={1200}
              height={400}
              loading="lazy"
              className="footer-logo"
              sizes="(max-width: 640px) 92vw, 480px"
            />
          </div>

        </div>

        <p className="footer-credit">Dirigido por Elizabeth Gori 2025</p>
        <p className="footer-beto">web dev <a className='beto-link' href='betodute.com'>betodute.com</a></p>
      </div>
    </footer>
  );
};
