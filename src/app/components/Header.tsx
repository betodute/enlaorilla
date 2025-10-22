"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./Header.css";

/** Per-letter spans:
 *  - .char--anchor on first letter of each word (E, L, O)
 *  - .char--w0 / .char--w1 / .char--w2 for word index
 */
function CharLine({
  text,
  className,
  anchorFirstLetters = false,
}: {
  text: string;
  className?: string;
  anchorFirstLetters?: boolean;
}) {
  const chars = Array.from(text);
  let prevWasSpace = true;
  let wordIndex = -1;

  return (
    <div className={className} aria-label={text}>
      {chars.map((ch, i) => {
        const isSpace = ch === " ";
        if (isSpace) {
          prevWasSpace = true;
          return (
            <span key={i} className="char char--space" aria-hidden="true">
              &nbsp;
            </span>
          );
        }

        if (prevWasSpace) wordIndex += 1;
        const isAnchor = anchorFirstLetters && prevWasSpace;
        prevWasSpace = false;

        return (
          <span
            key={i}
            className={`char char--w${wordIndex}${isAnchor ? " char--anchor" : ""}`}
            style={{ ["--i" as any]: i }}
          >
            {ch}
          </span>
        );
      })}
    </div>
  );
}

export const Header = () => {
  const sectRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    let raf = 0;
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

    const update = () => {
      const vh = window.innerHeight;
      const start = section.offsetTop;     // animate across first viewport
      const end = start + vh;
      const y = window.scrollY;
      const p = clamp01((y - start) / (end - start));
      sticky.style.setProperty("--p", String(p));
    };

    const loop = () => { update(); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section ref={sectRef} className="hero-simple">
      <div ref={stickyRef} className="hero-simple__sticky">
        {/* Static image (unchanged) */}
        <div className="hero-image-static">
          <Image
            className="header-image"
            src="/images/poetry-margins-header.webp"
            alt="header image"
            width={1200}
            height={600}
            priority
          />
        </div>

        {/* Text block */}
        <div className="text-block">
          {/* Only E L O visible at load; others fly in from edges */}
          <CharLine
            text="EN LA ORILLA"
            className="title-line"
            anchorFirstLetters
          />
          {/* Subtitle: keep previous spacing animation */}
          <div className="subtitle-line">poética de la marginalidad</div>
        </div>
      </div>

      <div className="after-hero-spacer" />
    </section>
  );
};












