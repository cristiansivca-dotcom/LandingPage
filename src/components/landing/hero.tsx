"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Truck, Hammer, Megaphone, Wrench, ArrowRight } from "lucide-react";

export function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-black"
    >
      {/* Video de fondo con filtro de profundidad */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        >
          <source src="/videos/hero1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlays Dinámicos (Gradientes de Lujo) */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/60 z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 z-1 blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-1" />

      {/* Elementos Decorativos Flotantes (Sutiles) */}
      <div className="absolute inset-0 pointer-events-none z-2 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[150px] animate-pulse delay-700" />

        <Truck className="absolute top-20 left-[10%] text-white/10 h-16 w-16 animate-float opacity-30" />
        <Hammer className="absolute bottom-32 right-[15%] text-white/10 h-14 w-14 animate-float opacity-20 delay-1000" />
        <Wrench className="absolute top-1/3 right-[10%] text-white/10 h-12 w-12 animate-float opacity-25 delay-500" />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-reveal">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          Liderando la industria en Venezuela
        </div>

        <h1
          className="font-headline text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white animate-reveal shadow-2xl"
          style={{ textShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
        >
          SERVICIOS INTEGRALES DE <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">VENEZUELA</span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl font-medium text-white/70 max-w-2xl animate-reveal delay-200 leading-relaxed text-center">
          Excelencia y Calidad de <br className="hidden md:block" />
          <span className="text-white border-b border-accent/50 pb-1">Servicios </span>
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-reveal delay-500">
          <Button
            asChild
            size="lg"
            className="h-16 px-10 rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] text-lg font-bold"
          >
            <Link href="#services" className="flex items-center gap-3">
              Nuestros Servicios <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-16 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all hover:scale-105 text-lg font-bold"
          >
            <Link href="#contact">Contáctanos</Link>
          </Button>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-40">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-scroll-dot" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-dot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        .animate-scroll-dot {
          animation: scroll-dot 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
