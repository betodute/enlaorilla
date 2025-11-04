"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;
      if (btnRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="navbar-wrapper" aria-label="Main">
      <div className="navbar-content">
        <div className="navbar-menu">
          <button
            ref={btnRef}
            className="menu-button"
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            Menu <span className="chevron" aria-hidden>▾</span>
          </button>

          <div ref={menuRef} className={`dropdown${open ? " open" : ""}`} role="menu">
            {/* INTERNAL routes -> Link. Close menu on click */}
            <Link href="/" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Inicio
            </Link>
            <Link href="#proyecto" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Proyecto
            </Link>
            <Link href="#textos" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Textos
            </Link>
            <Link href="#contacto" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Contacto
            </Link>
            {/* EXTERNAL links can stay <a> */}
            {/* <a href="https://..." className="dropdown-item" target="_blank" rel="noopener noreferrer">Externo</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};



