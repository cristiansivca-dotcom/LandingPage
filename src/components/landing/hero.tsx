"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import hero from "@/assets/image/hero.svg";
import { Truck, Hammer, Megaphone, Wrench } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen w-full flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Imagen de fondo */}
      <Image
        src={hero}
        alt="Hero background"
        fill
        className="object-cover animate-pulse"
        priority
      />

      {/* Overlay degradado animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/40 to-black/80 animate-gradient-x" />

      {/* Íconos flotando en el fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primera capa */}
        <Truck className="absolute top-20 left-10 text-white/20 h-12 w-12 animate-float" />
        <Hammer className="absolute bottom-24 right-12 text-white/20 h-12 w-12 animate-float-delayed" />
        <Megaphone className="absolute top-1/3 right-1/4 text-white/20 h-12 w-12 animate-float" />
        <Wrench className="absolute bottom-10 left-1/3 text-white/20 h-12 w-12 animate-float-delayed" />

        {/* Segunda capa (más íconos en otras posiciones) */}
        <Truck className="absolute top-1/4 left-1/2 text-white/10 h-10 w-10 animate-float" />
        <Hammer className="absolute top-2/3 left-1/4 text-white/10 h-10 w-10 animate-float-delayed" />
        <Megaphone className="absolute bottom-1/4 right-1/3 text-white/10 h-10 w-10 animate-float" />
        <Wrench className="absolute top-1/2 right-10 text-white/10 h-10 w-10 animate-float-delayed" />

        {/* Tercera capa (más pequeños y más suaves) */}
        <Truck className="absolute bottom-16 left-20 text-white/10 h-8 w-8 animate-float" />
        <Hammer className="absolute top-10 right-1/2 text-white/10 h-8 w-8 animate-float-delayed" />
        <Megaphone className="absolute bottom-32 right-1/4 text-white/10 h-8 w-8 animate-float" />
        <Wrench className="absolute top-40 left-1/4 text-white/10 h-8 w-8 animate-float-delayed" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-0 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-1000">
        <h1
          className="font-headline text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-accent animate-text-shimmer"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
        >
          Servicios Integrales de Venezuela C.A
        </h1>

        {/* Subtítulo/tagline */}
        <p
          className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-accent-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
        >
          Excelencia y Calidad de Servicios
        </p>

        {/* Texto descriptivo */}
        <p
          className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
        >
          Expertos en{" "}
          <span className="text-accent font-semibold">logística</span>,{" "}
          <span className="text-accent font-semibold">construcción</span>,{" "}
          <span className="text-accent font-semibold">publicidad</span> y{" "}
          <span className="text-accent font-semibold">
            organización de eventos
          </span>
          . Nuestro compromiso es superar expectativas y aportar al crecimiento
          del país.
        </p>

        {/* Botones CTA */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto transition-transform hover:scale-110 shadow-lg"
          >
            <Link href="#services">Explora Nuestros Servicios</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto transition-transform hover:scale-110 shadow-lg"
          >
            <Link href="#contact">Contáctanos</Link>
          </Button>
        </div>
      </div>

      {/* Animaciones personalizadas */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
        animate-move-around {
          animation: moveAround 12s ease-in-out infinite;
        }
        .animate-move-around-delayed {
          animation: moveAround 14s ease-in-out infinite;
          animation-delay: 4s;
        }
        @keyframes moveAround {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -20px) rotate(10deg);
          }
          50% {
            transform: translate(-20px, 25px) rotate(-10deg);
          }
          75% {
            transform: translate(25px, 15px) rotate(5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
