"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "@/components/Carousel";
import { Instagram, Linkedin, Mail } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  photo: string;
  back?: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Pedro Mohtar",
    role: "Director General",
    photo: "/images/team/pedro.jpg",
    back: "Liderando con visión estratégica y compromiso inquebrantable.",
  },
  {
    name: "María Gómez",
    role: "Gerente de Proyectos",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    back: "Transformando ideas complejas en realidades tangibles.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Ingeniero de Logística",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    back: "Optimizando cadenas de suministro para la máxima eficiencia global.",
  },
  {
    name: "Ana Torres",
    role: "Diseñadora Gráfica",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    back: "Creatividad visual que proyecta la identidad de SIVCA.",
  },
];

export function Team() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="team" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            Capital Humano
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-black text-foreground leading-[1] tracking-tighter">
            LIDERAZGO <span className="text-primary italic">PROFESIONAL</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Un equipo multidisciplinario enfocado en superar los estándares del
            sector y entregar valor excepcional a nuestros clientes.
          </p>
        </div>

        {/* Layout: Scroll Horizontal (Móvil) + Grid (Desktop) */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-x-6 sm:gap-y-12 animate-reveal delay-300 mt-12 pb-8 sm:pb-0 no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0">
          {TEAM.map((member) => (
            <div key={member.name} className="w-[85vw] sm:w-auto flex-shrink-0 snap-center sm:snap-align-none">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, photo, back }: TeamMember) {
  return (
    <div className="group flex flex-col items-center text-center">
      {/* Contenedor de la Imagen */}
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg bg-card/50 ring-1 ring-white/10">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradiente sutil para la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Redes Sociales en hover (Desktop) o siempre accesibles por toque en móvil */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {[Instagram, Linkedin, Mail].map((Icon, i) => (
            <button key={i} className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:scale-110 transition-all shadow-xl">
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Información del Miembro (Siempre Visible) */}
      <h3 className="font-headline text-2xl font-black text-foreground mb-1 leading-tight">
        {name}
      </h3>
      <p className="text-primary text-xs font-black uppercase tracking-widest mb-4">
        {role}
      </p>
      <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-[90%]">
        "{back}"
      </p>
    </div>
  );
}

