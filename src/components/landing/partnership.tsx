"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "@/components/Carousel";
import { Play, X } from "lucide-react";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-[320px] h-[320px] group flex-shrink-0 snap-center">
      {/* Tarjeta de cristal */}
      <div className="relative w-full h-full bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 group-hover:border-primary/20 group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center p-10">

        {/* Logo y Nombre */}
        <div className="relative z-10 flex flex-col items-center transition-all duration-500 group-hover:scale-95 group-hover:opacity-40">
          <div className="relative w-32 h-32 flex items-center justify-center p-4 bg-white/5 rounded-[2rem] border border-white/5 mb-6 group-hover:bg-white transition-all duration-500">
            <Image
              src={logo}
              alt={`Logo ${name}`}
              className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h3 className="font-headline text-xl font-black text-foreground tracking-tight">{name}</h3>
          <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-2">Aliado Estratégico</p>
        </div>

        {/* Overlay de Play */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
          onClick={() => {
            setIsPlaying(true);
            onPlay?.();
          }}
        >
          <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40 transform scale-50 group-hover:scale-100 transition-transform duration-500">
            <Play className="w-8 h-8 fill-current ml-1" />
          </div>
          <span className="absolute bottom-10 text-[10px] font-black text-white uppercase tracking-[0.3em]">Ver Testimonio</span>
        </div>

        {/* Video Player Modal/Overlay */}
        {isPlaying && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-500">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(false);
                onStop?.();
              }}
              className="absolute top-10 right-10 z-[110] w-14 h-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <video
                src={videoUrl}
                autoPlay
                controls
                className="w-full h-full object-cover"
                onEnded={() => {
                  setIsPlaying(false);
                  onStop?.();
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function PartnershipsUnified() {
  const [autoplay, setAutoplay] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const partners: Omit<PartnerCardProps, 'onPlay' | 'onStop'>[] = [
    { logo: logoPolar, name: "Empresas Polar", videoUrl: "/videos/socio1.mp4" },
    { logo: logoInces, name: "INCES", videoUrl: "/videos/socio2.mp4" },
    { logo: logoIESV, name: "IESV", videoUrl: "/videos/socio3.mp4" },
    { logo: logoPETREX, name: "PETREX", videoUrl: "/videos/socio4.mp4" },
    { logo: logoMinagua, name: "Minaguas", videoUrl: "/videos/socio5.mp4" },
  ];

  if (!mounted) return null;

  return (
    <section id="partnerships" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(var(--primary),0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 space-y-6 animate-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            Ecosistema de Valor
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter">
            ALIANZAS <span className="text-primary italic">ESTRATÉGICAS</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Colaboramos con las instituciones y corporaciones más prestigiosas
            para garantizar resultados que trascienden estándares.
          </p>
        </div>

        {/* Carrusel Unificado (Móvil y Desktop si son muchos) */}
        <div className="animate-reveal delay-300">
          <Carousel step={350} interval={3000} autoplay={autoplay}>
            {partners.map((partner, i) => (
              <PartnerCard
                key={i}
                {...partner}
                onPlay={() => setAutoplay(false)}
                onStop={() => setAutoplay(true)}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

