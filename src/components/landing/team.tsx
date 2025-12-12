"use client";

import React, { useState, useRef, useEffect } from "react";

type TeamMember = {
  name: string;
  role: string;
  photo: string; // URL o ruta local de la foto
  back?: string; // frase corta opcional
};

const TEAM: TeamMember[] = [
  {
    name: "Juan Pérez",
    role: "Director General",
    photo: "/team/juan.jpg",
    back: "Liderando con visión y compromiso.",
  },
  {
    name: "María Gómez",
    role: "Gerente de Proyectos",
    photo: "/team/maria.jpg",
    back: "Experta en planificación y ejecución.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Ingeniero de Logística",
    photo: "/team/carlos.jpg",
    back: "Optimiza procesos para máxima eficiencia.",
  },
  {
    name: "Ana Torres",
    role: "Diseñadora Gráfica",
    photo: "/team/ana.jpg",
    back: "Creatividad que impulsa la marca.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce al equipo de SIVCA, profesionales comprometidos con la
            excelencia y la innovación.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, photo, back }: TeamMember) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsFlipped(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={cardRef} className="relative w-full perspective min-h-[20rem]">
      <div
        className={`flip-card-inner w-full h-full transition-transform duration-700 ease-in-out ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Cara frontal */}
        <div
          className="flip-card-front absolute inset-0 bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setIsFlipped(true)}
        >
          <img
            src={photo}
            alt={name}
            className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg ring-4 ring-primary/20"
          />
          <h3 className="font-headline text-xl font-bold text-primary">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>

        {/* Cara trasera */}
        <div
          className="flip-card-back absolute inset-0 bg-primary text-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setIsFlipped(false)}
        >
          <img
            src={photo}
            alt={name}
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
          />
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm">{role}</p>
          {back && <span className="mt-4 text-xs font-medium">{back}</span>}
        </div>
      </div>

      {/* Estilos flip */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.75rem;
          box-sizing: border-box;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
