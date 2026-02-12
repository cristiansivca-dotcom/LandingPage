"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { PremiumCarousel } from "./premium-carousel";
import { Play, X, ShieldCheck, Star, Users, ExternalLink, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

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

  return (
    <div className="relative w-[340px] h-[400px] group flex-shrink-0">
      {/* Cinematic Card Container */}
      <div className={cn(
        "relative w-full h-full bg-white/[0.03] dark:bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[3rem] overflow-hidden transition-all duration-700",
        "hover:border-primary/40 hover:-translate-y-4 hover:shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
      )}>

        {/* Background Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
          {/* Logo Container with Luminance effect */}
          <div className="relative w-40 h-40 flex items-center justify-center p-6 mb-8 transition-all duration-700 group-hover:scale-110">
            {/* Glow behind logo on hover */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative w-full h-full flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 group-hover:bg-white group-hover:border-white transition-all duration-500 shadow-inner">
              <Image
                src={logo}
                alt={`Logo ${name}`}
                className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>

          <div className="text-center space-y-2 transform transition-all duration-500 group-hover:translate-y-2">
            <h3 className="font-headline text-2xl font-black text-foreground tracking-tight leading-tight">
              {name}
            </h3>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">Aliado Estratégico</p>
            </div>
          </div>
        </div>

        {/* Cinematic Play Overlay */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 cursor-pointer backdrop-blur-0 group-hover:backdrop-blur-sm bg-black/0 group-hover:bg-black/20"
          onClick={() => {
            setIsPlaying(true);
            onPlay?.();
          }}
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/40 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary),0.5)] transform scale-50 group-hover:scale-100 transition-transform duration-500 hover:scale-110 active:scale-95">
              <Play className="w-10 h-10 fill-current ml-1" />
            </div>
          </div>
          <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em] drop-shadow-lg">Testimonio Éxito</span>
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>

        {/* Video Player Modal */}
        {isPlaying && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-20 animate-in fade-in zoom-in-95 duration-500">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(false);
                onStop?.();
              }}
              className="absolute top-10 right-10 z-[110] w-16 h-16 rounded-full bg-white/10 hover:bg-primary text-white transition-all flex items-center justify-center border border-white/10 group/close"
            >
              <X className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </button>
            <div className="relative w-full max-w-6xl aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] bg-black">
              <video
                src={videoUrl}
                autoPlay
                controls
                className="w-full h-full object-contain"
                onEnded={() => {
                  setIsPlaying(false);
                  onStop?.();
                }}
              />
              <div className="absolute top-8 left-8 flex items-center gap-4 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-black uppercase tracking-widest text-[10px]">Caso de Éxito</p>
                  <h4 className="text-white/60 text-[9px] font-bold">{name}</h4>
                </div>
              </div>
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
    <section id="partnerships" className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_0%,rgba(var(--primary),0.05)_0%,transparent_70%)] opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_0%_100%,rgba(var(--accent),0.03)_0%,transparent_70%)] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32 space-y-8 animate-reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-inner">
            <Star className="w-3.5 h-3.5" />
            Ecosistema de Valor
          </div>

          <h2 className="font-headline text-5xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter uppercase">
            ALIANZAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent italic px-1">ESTRATÉGICAS</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto">
            Colaboramos con las instituciones y corporaciones más prestigiosas del país
            para garantizar resultados que definen la excelencia industrial.
          </p>
        </div>

        {/* Premium Carousel Integrated */}
        <div className="animate-reveal delay-300">
          <PremiumCarousel
            className="max-w-[1400px] mx-auto px-4"
            options={{ loop: true, align: 'center' }}
          >
            {partners.map((partner, i) => (
              <PartnerCard
                key={i}
                {...partner}
                onPlay={() => setAutoplay(false)}
                onStop={() => setAutoplay(true)}
              />
            ))}
          </PremiumCarousel>
        </div>

        {/* Trust Indicators Footer */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Certificado</span>
              <span className="text-[8px] font-bold text-muted-foreground uppercase">ISO 9001:2015</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-primary" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Red Nacional</span>
              <span className="text-[8px] font-bold text-muted-foreground uppercase">24 Estados</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ExternalLink className="w-6 h-6 text-primary" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Socio Global</span>
              <span className="text-[8px] font-bold text-muted-foreground uppercase">Institucional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

