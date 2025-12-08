"use client";

import Image from "next/image";
import { Carousel } from "@/components/Carousel"; // <-- tu nuevo carrusel reutilizable

import logoPolar from "@/assets/image/logo_polar.webp";
import logoInces from "@/assets/image/logo_INCES.png";
import logoIESV from "@/assets/image/logo_IESV.png";
import logoPETREX from "@/assets/image/logo_petrex.png";
import logoMinaguas from "@/assets/image/logo_minagua.png";

const logos = [
  { src: logoPolar, alt: "Empresas Polar" },
  { src: logoInces, alt: "INCES" },
  { src: logoIESV, alt: "IESV" },
  { src: logoPETREX, alt: "PETREX" },
  {
    src: logoMinaguas,
    alt: "Ministerio del Poder Popular de Atención de las Aguas",
  },
];

export function Partnership() {
  return (
    <section id="partnerships" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">
            Aliados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estas son algunas de las empresas y organizaciones con las que hemos
            trabajado y colaborado.
          </p>
        </div>

        {/* Carrusel reutilizable con autoplay */}
        <Carousel step={300} interval={2500}>
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="snap-center flex-shrink-0 w-64 flex flex-col items-center justify-center"
            >
              <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center w-48 h-24">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain max-h-16 w-auto"
                />
              </div>
              <span className="mt-4 text-sm text-muted-foreground text-center">
                {logo.alt}
              </span>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
