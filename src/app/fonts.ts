import { Labrada, Archivo, Chivo, Faustina, MuseoModerno } from "next/font/google";
import Proximanova from "next/font/local";

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export const museoModerno = MuseoModerno({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-museo",
  display: "swap",
});

export const faustina = Faustina({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-faustina",
  display: "swap",
});

export const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-chivo",
  display: "swap",
});

export const labrada = Labrada({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-labrada",
  display: "swap",
});

export const proximanova = Proximanova({
  src: [
    { path: "./fonts/proximanova_regular.woff2", weight: "400", style: "normal" }
  ],
  variable: "--font-proxima-nova",
  display: "swap",
});