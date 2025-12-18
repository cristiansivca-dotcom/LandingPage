"use client";

import React, { useState, useRef, useEffect } from "react";
import { Truck, Hammer, Wrench, Megaphone, CalendarDays } from "lucide-react";

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
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos una empresa venezolana especializada en soluciones integrales
            que impulsan el éxito de nuestros clientes, con excelencia operativa
            y compromiso sostenible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, description, back }: ServiceItem) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null; // Evita el render en SSR

  return (
    <div ref={cardRef} className="relative w-full perspective min-h-[18rem]">
      <div
        className={`flip-card-inner w-full h-full transition-transform duration-700 ease-in-out ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Cara frontal */}
        <div
          className="flip-card-front absolute inset-0 bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setIsFlipped(true)}
        >
          <div className="bg-primary text-primary-foreground rounded-full p-5 mb-6 shadow-lg ring-4 ring-primary/20">
            <Icon className="h-10 w-10 md:h-12 md:w-12" />
          </div>
          <h3 className="font-headline text-xl md:text-2xl font-bold text-primary">
            {title}
          </h3>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground">
            Descubre más sobre este servicio
          </p>
          <button className="mt-6 px-4 py-2 text-xs md:text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition">
            Más información
          </button>
        </div>

        {/* Cara trasera */}
        <div
          className="flip-card-back absolute inset-0 bg-primary text-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setIsFlipped(false)}
        >
          <p className="text-sm md:text-lg leading-relaxed font-medium">
            {description}
          </p>
          {back && (
            <span className="mt-4 text-xs md:text-sm font-semibold">
              {back}
            </span>
          )}
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
