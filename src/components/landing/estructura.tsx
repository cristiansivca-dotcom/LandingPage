"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type OrgMember = {
  name: string;
  role: string;
  children?: OrgMember[];
};

const ORG_STRUCTURE: OrgMember = {
  name: "Dirección General",
  role: "CEO / Gerente General",
  children: [
    {
      name: "Departamento de Logística",
      role: "Jefe de Logística",
      children: [
        { name: "Coordinador de Transporte", role: "Supervisor" },
        { name: "Equipo de Conductores", role: "Personal operativo" },
      ],
    },
    {
      name: "Departamento de Construcción",
      role: "Jefe de Obras",
      children: [
        { name: "Ingenieros Residentes", role: "Supervisión técnica" },
        { name: "Equipo de Obreros", role: "Ejecución de proyectos" },
      ],
    },
    {
      name: "Departamento de Publicidad",
      role: "Director de Marketing",
      children: [
        { name: "Diseñadores Gráficos", role: "Creatividad visual" },
        { name: "Equipo de Comunicación", role: "Campañas y medios" },
      ],
    },
    {
      name: "Departamento de Eventos",
      role: "Coordinador de Eventos",
      children: [
        { name: "Planificadores", role: "Organización" },
        { name: "Equipo de Producción", role: "Montaje y logística" },
      ],
    },
    {
      name: "Departamento de Mantenimiento",
      role: "Jefe de Mantenimiento",
      children: [
        { name: "Técnicos Eléctricos", role: "Plantas eléctricas" },
        { name: "Técnicos de Climatización", role: "Aires acondicionados" },
      ],
    },
  ],
};

function OrgNode({ member, isRoot = false }: { member: OrgMember; isRoot?: boolean }) {
  return (
    <div className="flex flex-col items-center text-center relative min-w-[280px] snap-center group">
      {/* Nodo principal */}
      <div className={cn(
        "relative z-10 px-8 py-5 rounded-2xl backdrop-blur-xl border transition-all duration-500",
        isRoot
          ? "bg-primary text-white border-primary shadow-2xl shadow-primary/20 scale-110 mb-2"
          : "bg-card/40 text-foreground border-white/5 hover:border-primary/20 hover:bg-card/60"
      )}>
        <h3 className={cn(
          "font-headline font-black tracking-tight mb-1",
          isRoot ? "text-lg" : "text-base"
        )}>
          {member.name}
        </h3>
        <p className={cn(
          "font-medium tracking-widest uppercase",
          isRoot ? "text-[10px] text-white/80" : "text-[9px] text-primary"
        )}>
          {member.role}
        </p>
      </div>

      {/* Hijos */}
      {member.children && (
        <div className="mt-12 flex gap-8 justify-center relative">
          {/* Línea vertical hacia abajo */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-primary/10" />

          {member.children.map((child, i) => (
            <div key={i} className="flex flex-col items-center relative">
              {/* Línea horizontal colectora */}
              {member.children && member.children.length > 1 && (
                <div className={cn(
                  "absolute top-0 h-0.5 bg-primary/10",
                  i === 0 ? "left-1/2 right-0" : i === member.children.length - 1 ? "left-0 right-1/2" : "inset-x-0"
                )} />
              )}
              <OrgNode member={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function OrgChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="org" className="py-24 md:py-40 bg-card/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 space-y-6 animate-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            Gobierno Corporativo
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter">
            ESTRUCTURA <span className="text-primary italic">ORGANIZACIONAL</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Nuestra jerarquía operativa está diseñada para maximizar la agilidad,
            la comunicación interna y la excelencia en el servicio al cliente.
          </p>
        </div>

        {/* Organigrama con scroll horizontal optimizado */}
        <div className="overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory animate-reveal delay-300">
          <div className="inline-flex min-w-full justify-center px-10">
            <OrgNode member={ORG_STRUCTURE} isRoot={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
