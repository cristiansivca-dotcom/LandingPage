"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "@/components/Carousel"; // tu carrusel reutilizable

// Importa logos
import logoPolar from "@/assets/image/logo_polar.webp";
import logoInces from "@/assets/image/logo_INCES.png";
import logoIESV from "@/assets/image/logo_IESV.png";
import logoPETREX from "@/assets/image/logo_petrex.png";
import logoMinagua from "@/assets/image/logo_minagua.png";

type PartnerCardProps = {
  logo: StaticImageData;
  name: string;
  videoUrl: string;
  onPlay?: () => void;
  onStop?: () => void;
};

function PartnerCard({
  logo,
  name,
  videoUrl,
  onPlay,
  onStop,
}: PartnerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsFlipped(false);
        onStop?.(); // reanuda carrusel
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onStop]);

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
          onClick={() => {
            setIsFlipped(true);
            onPlay?.(); // pausa carrusel
          }}
        >
          <Image src={logo} alt={`Logo ${name}`} width={120} height={120} />
          <h3 className="mt-4 font-bold text-primary">{name}</h3>
          <p className="text-sm text-muted-foreground">
            Haz clic para ver video
          </p>
        </div>

        {/* Cara trasera */}
        <div className="flip-card-back absolute inset-0 bg-black rounded-xl shadow-xl flex items-center justify-center">
          {/* Botón X */}
          <button
            onClick={() => {
              setIsFlipped(false);
              onStop?.(); // reanuda carrusel
            }}
            className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
          >
            ✕
          </button>

          <video
            src={videoUrl}
            controls
            className="w-full h-full object-cover rounded-xl"
            onPlay={onPlay}
            onPause={onStop}
            onEnded={onStop}
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

export function PartnershipsUnified() {
  const [autoplay, setAutoplay] = useState(true);

  const partners: PartnerCardProps[] = [
    { logo: logoPolar, name: "Polar", videoUrl: "/videos/socio1.mp4" },
    { logo: logoInces, name: "INCES", videoUrl: "/videos/socio2.mp4" },
    { logo: logoIESV, name: "IESV", videoUrl: "/videos/socio3.mp4" },
    { logo: logoPETREX, name: "PETREX", videoUrl: "/videos/socio4.mp4" },
    { logo: logoMinagua, name: "Minaguas", videoUrl: "/videos/socio5.mp4" },
  ];

  return (
    <section id="partnerships" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Nuestros Aliados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Empresas y organizaciones que confían en SIVCA y colaboran en
            nuestro crecimiento.
          </p>
        </div>

        {/* Carrusel en móvil */}
        <div className="block md:hidden">
          <Carousel step={300} interval={2500} autoplay={autoplay}>
            {partners.map((partner, i) => (
              <PartnerCard
                key={i}
                logo={partner.logo}
                name={partner.name}
                videoUrl={partner.videoUrl}
                onPlay={() => setAutoplay(false)}
                onStop={() => setAutoplay(true)}
              />
            ))}
          </Carousel>
        </div>

        {/* Grid en desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {partners.map((partner, i) => (
            <PartnerCard
              key={i}
              logo={partner.logo}
              name={partner.name}
              videoUrl={partner.videoUrl}
              onPlay={() => setAutoplay(false)}
              onStop={() => setAutoplay(true)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
