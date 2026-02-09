"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, ArrowRight, ExternalLink } from "lucide-react";

export function Catalog() {
  return (
    <section id="catalog" className="py-24 md:py-40 relative overflow-hidden bg-background">
      {/* Elementos decorativos de fondo cinematicos */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            {/* Efecto de resplandor periférico */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-card/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-20 shadow-2xl overflow-hidden">
              {/* Línea de escaneo animada */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10 text-center lg:text-left">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Experiencia Digital</span>
                  </div>

                  <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground leading-[0.9] tracking-tighter">
                    EXPLORA NUESTRO <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent italic">UNIVERSO</span>
                  </h2>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-medium">
                    Una ventana interactiva a nuestra excelencia técnica.
                    Detalles precisos, disponibilidad real e innovación en cada clic.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
                    <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                      <Link href="https://catalogo.sivca.com.ve" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        Acceder al Catálogo <ExternalLink className="w-6 h-6" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="lg" className="rounded-full px-10 h-16 text-lg font-bold border border-white/10 hover:bg-white/5 transition-all">
                      <Link href="#contact" className="flex items-center gap-3">
                        Asesoría Directa <ArrowRight className="w-6 h-6" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  {/* Visualización de búsqueda tech */}
                  <div className="relative z-10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-[2rem] p-1 md:p-1.5 shadow-2xl border border-white/10">
                    <div className="bg-background/40 rounded-[1.8rem] p-10 flex flex-col items-center justify-center text-center space-y-8 aspect-square relative overflow-hidden group/card shadow-inner">
                      {/* Grid sutil de fondo */}
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

                      <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl group-hover/card:scale-150 transition-transform duration-700" />
                        <div className="relative w-24 h-24 rounded-3xl bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 group-hover/card:rotate-[360deg] transition-transform duration-1000">
                          <Search className="w-12 h-12" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-black text-3xl text-foreground tracking-tight">BÚSQUEDA SMART</h4>
                        <p className="text-muted-foreground font-medium text-lg leading-snug">Algoritmos de precisión para <br /> soluciones inmediatas.</p>
                      </div>

                      <div className="w-full space-y-4">
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-gradient-to-r from-primary to-accent animate-pulse" />
                        </div>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">
                          <span>Sincronizando...</span>
                          <span>94% Completado</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elementos flotantes extra */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
