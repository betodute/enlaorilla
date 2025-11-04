"use client";

import React from "react";
import Image from "next/image";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        Este libro/presentación/conferencia (según sea el caso) fue realizado con el apoyo del Sistema de Apoyos a la Creación y Proyectos Culturales, a través del PECDA Aguascalientes, emisión 2025.
      </div>

      {/* Federal card (zoomed) */}
      <div className="footer-content-official">
        <Image
          src="/images/official-logo-gov.webp"
          alt="PECDA (federal) logo"
          width={1200}        // use your intrinsic width if you know it
          height={400}        // use your intrinsic height if you know it
          priority
          className="footer-logo"
          style={{ width: "100%", height: "auto" }}  // responsive
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 600px"
        />
      </div>

      <div className="footer-content-official-state">
        <Image
          src="/images/official-logo-state-two.png"
          alt="PECDA (state) logo"
          width={1200}
          height={400}
          className="footer-logo"
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 600px"
        />
      </div>

      {/* State card (smaller inside same-size card) */}
      <div className="footer-content-official-state">
        <Image
          src="/images/official-logo-state.webp"
          alt="PECDA (state) logo"
          width={1200}
          height={400}
          className="footer-logo"
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 600px"
        />
      </div>

      <div className="footer-content-gori">
        Gori | 2025
      </div>
    </div>
  );
};
