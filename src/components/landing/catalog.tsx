"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export function Catalog() {
  return (
    <section id="catalog" className="py-24 md:py-48 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            {/* Efecto de resplandor periférico */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-card/40 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-8 md:p-24 shadow-2xl overflow-hidden">
              {/* Línea de escaneo animada */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12 text-center lg:text-left">
                  <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.3em]">
                    <Sparkles className="w-4 h-4" />
                    <span>Activaciones & BTL</span>
                  </div>

                  <h2 className="font-headline text-4xl md:text-6xl font-black text-foreground leading-[0.9] tracking-tighter">
                    PROMOTORAS DE <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent italic">MARCA</span>
                  </h2>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-medium">
                    Conecta con el perfil ideal para representar tu negocio.
                    Modelos, promotoras y embajadoras de marca con imagen impecable y excelente proyección.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
                    <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 h-20 text-xl font-bold shadow-[0_20px_40px_rgba(var(--primary),0.3)] hover:scale-105 transition-all">
                      <Link href="https://catalogo.sivca.com.ve" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                        Ver Catálogo VIP <ExternalLink className="w-7 h-7" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="lg" className="rounded-full px-12 h-20 text-xl font-bold border border-white/10 hover:bg-white/5 transition-all">
                      <Link href="#contact" className="flex items-center gap-4">
                        Contratar Ahora <ArrowRight className="w-7 h-7" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  {/* Visualización de búsqueda tech enfocada en talento */}
                  <div className="relative z-10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-[3rem] p-1.5 shadow-2xl border border-white/10">
                    <div className="bg-background/40 rounded-[2.8rem] p-12 flex flex-col items-center justify-center text-center space-y-10 aspect-square relative overflow-hidden group/card shadow-inner">
                      {/* Grid sutil de fondo */}
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

                      <div className="relative">
                        <div className="absolute -inset-6 bg-primary/30 rounded-full blur-2xl group-hover/card:scale-125 transition-transform duration-700" />
                        <div className="relative w-28 h-28 rounded-[2rem] bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-2xl shadow-primary/40 group-hover/card:rotate-12 transition-transform duration-500">
                          <Users className="w-14 h-14" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-black text-4xl text-foreground tracking-tight leading-[0.9] pt-2">BRAND<br />AMBASSADORS</h4>
                        <p className="text-muted-foreground font-medium text-xl leading-snug">Seleccionando los mejores perfiles <br /> para tu próximo evento.</p>
                      </div>

                      <div className="w-full space-y-6">
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-gradient-to-r from-primary via-white to-accent animate-pulse" />
                        </div>
                        <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-center text-primary">
                          <span className="flex items-center gap-2 text-center">
                            <UserCheck className="w-4 h-4 text-center" />
                            Verificado
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elementos flotantes extra */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-primary/20 rounded-full blur-[100px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
