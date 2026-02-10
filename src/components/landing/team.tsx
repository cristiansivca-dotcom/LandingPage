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
    name: "Juan Pérez",
    role: "Director General",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
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
          <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter">
            LIDERAZGO <span className="text-primary italic">PROFESIONAL</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Un equipo multidisciplinario enfocado en superar los estándares del
            sector y entregar valor excepcional a nuestros clientes.
          </p>
        </div>

        {/* Móvil: Carousel */}
        <div className="md:hidden animate-reveal delay-300">
          <Carousel step={350} interval={3500}>
            {TEAM.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Carousel>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-reveal delay-300">
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, photo, back }: TeamMember) {
  return (
    <div className="group relative w-full aspect-[4/5] bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-primary/20 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] flex-shrink-0 snap-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      <div className="relative z-10 h-full p-8 flex flex-col justify-end overflow-hidden">
        {/* Información frontal */}
        <div className="transform transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
          <h3 className="font-headline text-2xl font-black text-white mb-2 leading-tight">
            {name}
          </h3>
          <p className="text-primary text-[10px] font-black uppercase tracking-widest">
            {role}
          </p>
        </div>

        {/* Información en hover */}
        <div className="absolute inset-x-8 bottom-8 top-8 flex flex-col justify-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
          <p className="text-white text-lg font-medium leading-relaxed italic mb-8 border-l-2 border-primary pl-4">
            "{back}"
          </p>

          <div className="flex gap-4">
            {[Instagram, Linkedin, Mail].map((Icon, i) => (
              <button key={i} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-headline text-xl font-black text-white">{name}</h3>
            <p className="text-primary text-[9px] font-black uppercase tracking-[0.2em]">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

