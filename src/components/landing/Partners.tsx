"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import logoPolar from "@/assets/image/logo_polar.webp";
import logoMinagua from "@/assets/image/logo_minagua.png";
import logoInces from "@/assets/image/logo_INCES.png";

type PartnerCardProps = {
  logo: StaticImageData;
  name: string;
  videoUrl: string;
};

function PartnerCard({ logo, name, videoUrl }: PartnerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsFlipped(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-72 h-72 perspective flex-shrink-0 snap-center"
    >
      <div
        className={`flip-card-inner w-full h-full transition-transform duration-700 ease-in-out ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Cara frontal */}
        <div
          className="flip-card-front absolute inset-0 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setIsFlipped(true)}
        >
          <Image src={logo} alt={`Logo ${name}`} width={120} height={120} />
          <h3 className="mt-4 font-bold text-primary">{name}</h3>
          <p className="text-sm text-muted-foreground">
            Haz clic para ver video
          </p>
        </div>

        {/* Cara trasera */}
        <div
          className="flip-card-back absolute inset-0 bg-black rounded-xl shadow-xl flex items-center justify-center cursor-pointer"
          onClick={() => setIsFlipped(false)}
        >
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Estilos flip */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.75rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export function Partners() {
  const partners = [
    {
      logo: logoPolar,
      name: "Polar",
      videoUrl: "/videos/socio1.mp4",
    },
    {
      logo: logoMinagua,
      name: "Minagua",
      videoUrl: "/videos/socio2.mp4",
    },
    {
      logo: logoInces,
      name: "INCES",
      videoUrl: "/videos/socio3.mp4",
    },
    // Agrega más socios aquí si lo necesitas
  ];

  return (
    <section id="partners" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Nuestros Socios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce a nuestros socios estratégicos y su aporte a la empresa.
          </p>
        </div>

        {/* Carrusel en móvil, grid en desktop */}
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-10 justify-items-center">
          {partners.map((partner, i) => (
            <PartnerCard
              key={i}
              logo={partner.logo}
              name={partner.name}
              videoUrl={partner.videoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
