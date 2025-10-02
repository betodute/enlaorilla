import type { Metadata } from "next";
import { archivo, museoModerno, faustina, chivo, labrada, } from "./fonts";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "En La Orilla",
  description: "poética de la marginalidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${museoModerno.variable} ${faustina.variable} ${chivo.variable} ${labrada.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
