"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const lastYRef = useRef<number>(0);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuId = "main-menu";

  useEffect(() => {
    // Start at current scroll position
    lastYRef.current = window.scrollY;

    const THRESHOLD_SHOW = 24;  // show when user scrolls up by >= 24px
    const MIN_Y = 80;           // don't show until user is below this

    let accUp = 0;              // accumulate upward movement

    const onScroll = () => {
      const y = window.scrollY;

      // Always hide at top
      if (y <= MIN_Y) {
        setVisible(false);
        accUp = 0;
        lastYRef.current = y;
        return;
      }

      const delta = y - lastYRef.current;

      if (delta < 0) {
        // scrolling UP
        accUp += -delta;
        if (accUp >= THRESHOLD_SHOW) {
          setVisible(true);
        }
      } else if (delta > 0) {
        // scrolling DOWN
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

  // Keep the bar visible while the dropdown is open
  const wrapperClass =
    "navbar-wrapper" + (open || visible ? " is-visible" : " is-hidden");

  return (
    <nav className={wrapperClass} aria-label="Main">
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
            <Link href="#inicio" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Inicio
            </Link>
            <Link href="#proyecto" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Proyecto
            </Link>
            <Link href="#textos" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Textos
            </Link>
            <Link href="#gori" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Gori
            </Link>
            <Link href="#contact" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="#official" className="dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              Agradecimientos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};





