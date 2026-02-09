"use client";

import React, { useState, useRef, useEffect } from "react";
import { Truck, Hammer, Wrench, Megaphone, CalendarDays, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

type ServiceItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  back?: string;
};

const SERVICES: ServiceItem[] = [
  {
    icon: Truck,
    title: "Logística",
    description:
      "Ofrecemos servicios de transporte seguro y eficiente para carga pesada y traslado de personal en todo el territorio nacional.",
    back: "Flota moderna, conductores calificados y soluciones adaptadas a tus necesidades logísticas.",
  },
  {
    icon: Hammer,
    title: "Construcción",
    description:
      "Desarrollamos proyectos de construcción con altos estándares de calidad, responsabilidad y sostenibilidad.",
    back: "Nuestro equipo ejecuta obras que contribuyen al crecimiento del país y superan expectativas.",
  },
  {
    icon: Megaphone,
    title: "Servicios de Publicidad",
    description:
      "Diseñamos campañas publicitarias estratégicas para posicionar tu empresa y atraer clientes.",
    back: "Publicidad efectiva que conecta con tu audiencia y potencia tu crecimiento.",
  },
  {
    icon: CalendarDays,
    title: "Organización de Eventos",
    description:
      "Planificamos y ejecutamos eventos corporativos y sociales con excelencia y atención al detalle.",
    back: "Eventos memorables que reflejan profesionalismo y compromiso con cada cliente.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Industrial",
    description:
      "Realizamos instalación y mantenimiento preventivo y correctivo de plantas eléctricas y sistemas de aire acondicionado, asegurando continuidad operativa y eficiencia energética.",
    back: "Soluciones confiables para garantizar el funcionamiento óptimo de tus equipos críticos.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.3em] animate-reveal">
            Excelencia Operativa
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter animate-reveal delay-100">
            SOLUCIONES <span className="text-primary italic">INTEGRALES</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium animate-reveal delay-200">
            Impulsamos el éxito de nuestros clientes a través de servicios
            diseñados bajo los más altos estándares internacionales de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((item, index) => (
            <Dialog key={item.title}>
              <DialogTrigger asChild>
                <div
                  className="group relative bg-card/30 backdrop-blur-sm border border-white/5 hover:border-primary/20 rounded-[2rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col items-start text-left animate-reveal cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-8">
                    <div className="absolute -inset-2 bg-primary/10 rounded-2xl blur-lg group-hover:bg-primary/20 transition-all duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-xl shadow-primary/20">
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="font-headline text-2xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors text-balance">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed font-medium mb-8 flex-grow line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between group/link">
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                      Ver Detalles
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:border-primary transition-all">
                      <ArrowRight className="w-4 h-4 text-white group-hover/link:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] border-white/10 bg-background/95 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <DialogHeader className="relative z-10 text-left">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <DialogTitle className="font-headline text-4xl md:text-5xl font-black text-foreground leading-none tracking-tighter mb-6">
                    {item.title}
                  </DialogTitle>
                  <DialogDescription className="text-xl text-foreground font-medium leading-relaxed mb-8">
                    {item.description}
                  </DialogDescription>
                  {item.back && (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-muted-foreground font-medium italic leading-relaxed">
                        "{item.back}"
                      </p>
                    </div>
                  )}
                </DialogHeader>
                <div className="relative z-10 mt-10 md:mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Listos para servirte
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <button className="flex-grow sm:flex-grow-0 px-8 h-14 bg-primary text-white rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                      Cotizar <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
