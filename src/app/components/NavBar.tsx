"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);      // controls both menus' toggles
  const [visible, setVisible] = useState(false); // floating menu visibility
  const lastYRef = useRef<number>(0);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuId = "main-menu-floating";
  const staticMenuId = "main-menu-static";

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const THRESHOLD_SHOW = 24;
    const MIN_Y = 80;
    let accUp = 0;

    const onScroll = () => {
      const y = window.scrollY;

      if (y <= MIN_Y) {
        setVisible(false);
        accUp = 0;
        lastYRef.current = y;
        return;
      }

      const delta = y - lastYRef.current;

      if (delta < 0) {
        accUp += -delta;
        if (accUp >= THRESHOLD_SHOW) setVisible(true);
      } else if (delta > 0) {
        setVisible(false);
        accUp = 0;
      }

      lastYRef.current = y;
    };

    const onDoc = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;
      if (btnRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    };

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const wrapperClass =
    "navbar-wrapper" + (open || visible ? " is-visible" : " is-hidden");

  return (
    <>
      {/* 1) TOP BAR (not sticky; scrolls away) */}
      <nav id='navhome' className="navbar-static" aria-label="Main">
        <div className="navbar-static-inner">
          <Link href="#inicio" className="brand">LOGO</Link>

          <button
            className="static-toggle"
            aria-haspopup="menu"
            aria-expanded={open}
            aria-controls={staticMenuId}
            onClick={() => setOpen(v => !v)}
          >
            <span className="menu-dots" aria-hidden="true">
              <span className="mdot" />
              <span className="mdot" />
              <span className="mdot" />
            </span>
            <span className="visually-hidden">Abrir menú</span>
          </button>

          {/* NOTE: “Inicio” removed here per request */}
          <ul id={staticMenuId} className={`static-links${open ? " open" : ""}`}>
            <li><Link href="#proyecto">Proyecto</Link></li>
            <li><Link href="#textos">Videolecturas</Link></li>
            <li><Link href="#bitacora">Bitácora</Link></li>
            <li><Link href="#gori">Gori</Link></li>
            <li><Link href="#official">Agradecimientos</Link></li>
          </ul>
        </div>
      </nav>

      {/* 2) FLOATING MINI MENU (appears when scrolling up) */}
      <nav className={wrapperClass} aria-label="Quick menu">
        <div className="navbar-content">
          <div className="navbar-menu">
            <button
              ref={btnRef}
              className="menu-button"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen(v => !v)}
            >
              <span className="menu-dots" aria-hidden="true">
                <span className="mdot" />
                <span className="mdot" />
                <span className="mdot" />
              </span>
            </button>

            <div
              id={menuId}
              ref={menuRef}
              className={`dropdown${open ? " open" : ""}`}
              role="menu"
            >
              {/* “Inicio” stays in the floating menu */}
              <Link href="#navhome" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
                Inicio
              </Link>
              <Link href="#textos" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
                Textos
              </Link>
              <Link href="#proyecto" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
                Proyecto
              </Link>
               <Link href="#bitacora" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
                Bitácora
              </Link>
              <Link href="#gori" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
                Gori
              </Link>
              <Link href="#official" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
                Agradecimientos
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};







