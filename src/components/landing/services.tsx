"use client";

import React, { useState, useEffect } from "react";
import { Truck, Hammer, Wrench, Megaphone, CalendarDays, ArrowRight, Sparkles, Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="services" className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-28 space-y-8 animate-reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            Excelencia Operativa
          </div>

          <h2 className="font-headline text-4xl md:text-6xl font-black text-foreground leading-[0.9] tracking-tighter uppercase">
            SOLUCIONES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent italic px-1">INTEGRALES</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto">
            Impulsamos el éxito de nuestros clientes a través de servicios diseñados bajo los más altos estándares nacionales e internacionales de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((item, index) => (
            <Dialog key={item.title}>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    "group relative min-h-[380px] flex flex-col justify-between p-8 md:p-10 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden border border-white/5",
                    "bg-white/[0.02] dark:bg-zinc-900/40 hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 animate-reveal"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-primary blend-overlay" />

                  {/* Icon Area */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-primary dark:text-white bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-lg shadow-primary/20">
                    <item.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>

                  <div className="relative z-10 space-y-4 mt-8">
                    <h3 className="font-headline text-2xl md:text-3xl font-black text-foreground tracking-tight leading-tight transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed line-clamp-3 group-hover:text-foreground/90 transition-colors">
                      {item.description}
                    </p>

                    <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-primary dark:text-white group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">Saber más</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="w-[95vw] sm:max-w-2xl border border-border bg-background/95 backdrop-blur-2xl rounded-3xl p-6 md:p-12 overflow-y-auto overflow-x-hidden max-h-[90vh] shadow-2xl">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                <DialogHeader className="relative z-10 text-left space-y-8 mt-4 md:mt-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-lg bg-primary/10 border border-primary/20">
                    <item.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </div>

                  <div className="space-y-4">
                    <DialogTitle className="font-headline text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tighter">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                      {item.description}
                    </DialogDescription>
                  </div>

                  {item.back && (
                    <div className="relative p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4">
                      <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground/80 text-sm md:text-base italic leading-relaxed font-medium">
                        "{item.back}"
                      </p>
                    </div>
                  )}
                </DialogHeader>

                <div className="relative z-10 mt-8 md:mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-6 items-center justify-between">
                  <div className="flex flex-col gap-1 items-center sm:items-start w-full sm:w-auto text-center sm:text-left">
                    <div className="flex items-center gap-2 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Disponibilidad Inmediata
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">Atención Especializada</span>
                  </div>

                  <button
                    onClick={() => {
                      const message = `Hola, me gustaría solicitar una cotización y obtener más información sobre el servicio de: *${item.title}*.`;
                      const url = `https://wa.me/584121259744?text=${encodeURIComponent(message)}`;
                      window.open(url, "_blank");
                    }}
                    className="w-full sm:w-auto px-8 md:px-10 h-14 md:h-16 bg-primary text-white rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-95"
                  >
                    Cotizar Ahora <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
