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
      {/* Background Cinematic Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_0%,rgba(var(--primary),0.03)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_0%_100%,rgba(var(--accent),0.02)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-28 space-y-8 animate-reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            Excelencia Operativa
          </div>

          <h2 className="font-headline text-5xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter uppercase">
            SOLUCIONES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent italic px-1">INTEGRALES</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto">
            Impulsamos el éxito de nuestros clientes a través de servicios diseñados bajo los más altos estándares nacionales e internacionales de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((item, index) => (
            <Dialog key={item.title}>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    "group relative aspect-[4/5] flex flex-col justify-end p-10 rounded-[3rem] transition-all duration-700 cursor-pointer overflow-hidden backdrop-blur-3xl border border-white/5",
                    "bg-white/[0.02] dark:bg-black/20 hover:border-white hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] animate-reveal"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 bg-primary" />

                  {/* Icon Display */}
                  <div className="absolute top-10 right-10">
                    <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-white transition-all duration-700 group-hover:rotate-[360deg] shadow-2xl bg-primary shadow-primary/20">
                      <item.icon className="w-10 h-10" />
                    </div>
                  </div>

                  <div className="relative z-10 space-y-6">
                    <h3 className="font-headline text-3xl font-black text-foreground tracking-tight leading-tight transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-medium leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground">Explorar servicio</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] border-white/10 bg-background/95 backdrop-blur-3xl rounded-[3.5rem] p-10 md:p-16 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                <DialogHeader className="relative z-10 text-left space-y-10">
                  <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-2xl bg-primary">
                    <item.icon className="w-12 h-12" />
                  </div>

                  <div className="space-y-4">
                    <DialogTitle className="font-headline text-5xl md:text-6xl font-black text-foreground leading-[0.9] tracking-tighter">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription className="text-2xl text-foreground/80 font-medium leading-relaxed">
                      {item.description}
                    </DialogDescription>
                  </div>

                  {item.back && (
                    <div className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 group/quote">
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-xl">
                        <Trophy className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-lg italic leading-relaxed font-medium">
                        {item.back}
                      </p>
                    </div>
                  )}
                </DialogHeader>

                <div className="relative z-10 mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-8 items-center justify-between">
                  <div className="flex flex-col gap-1 items-start">
                    <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Listos para servirte
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Consultoría personalizada inmediata</span>
                  </div>

                  <button
                    onClick={() => {
                      const message = `Hola, me gustaría solicitar una cotización y obtener más información sobre el servicio de: *${item.title}*.`;
                      const url = `https://wa.me/584121259744?text=${encodeURIComponent(message)}`;
                      window.open(url, "_blank");
                    }}
                    className="w-full sm:w-auto px-10 h-16 bg-primary text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_20px_40px_rgba(var(--primary),0.3)] flex items-center justify-center gap-3 active:scale-95"
                  >
                    Cotizar Servicio <ArrowRight className="w-5 h-5" />
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
