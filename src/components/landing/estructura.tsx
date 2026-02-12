"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Crown,
  Truck,
  HardHat,
  Megaphone,
  PartyPopper,
  Wrench,
  Users,
  ChevronDown,
  ChevronRight,
  Sparkles
} from "lucide-react";

type OrgMember = {
  name: string;
  role: string;
  icon: React.ElementType;
  children?: OrgMember[];
};

const ORG_STRUCTURE: OrgMember = {
  name: "Dirección General",
  role: "CEO / Gerente General",
  icon: Crown,
  children: [
    {
      name: "Logística",
      role: "Jefe de Departamento",
      icon: Truck,
      children: [
        { name: "Coordinador de Transporte", role: "Supervisor", icon: Users },
        { name: "Equipo de Conductores", role: "Personal Operativo", icon: Users },
      ],
    },
    {
      name: "Construcción",
      role: "Jefe de Obras",
      icon: HardHat,
      children: [
        { name: "Ingenieros Residentes", role: "Supervisión Técnica", icon: Users },
        { name: "Equipo de Obreros", role: "Ejecución", icon: Users },
      ],
    },
    {
      name: "Publicidad",
      role: "Director de Marketing",
      icon: Megaphone,
      children: [
        { name: "Diseñadores Gráficos", role: "Creatividad", icon: Users },
        { name: "Equipo de Comunicación", role: "Medios", icon: Users },
      ],
    },
    {
      name: "Eventos",
      role: "Coordinador General",
      icon: PartyPopper,
      children: [
        { name: "Planificadores", role: "Organización", icon: Users },
        { name: "Equipo de Producción", role: "Montaje", icon: Users },
      ],
    },
    {
      name: "Mantenimiento",
      role: "Jefe Técnico",
      icon: Wrench,
      children: [
        { name: "Soporte Eléctrico", role: "Plantas", icon: Users },
        { name: "Soporte Climatización", role: "AA", icon: Users },
      ],
    },
  ],
};

function DepartmentCard({ member, level = 0 }: { member: OrgMember; level?: number }) {
  const Icon = member.icon;

  return (
    <div className={cn(
      "group relative flex flex-col items-center p-6 rounded-[2rem] transition-all duration-700 w-full max-w-[280px]",
      level === 0
        ? "bg-primary text-white shadow-[0_20px_50px_rgba(var(--primary),0.3)] scale-110 mb-8"
        : "bg-white/[0.03] dark:bg-black/20 backdrop-blur-2xl border border-white/10 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
    )}>
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
        level === 0 ? "bg-white/20" : "bg-primary/10 text-primary"
      )}>
        <Icon className="w-7 h-7" />
      </div>

      <div className="text-center">
        <h3 className={cn(
          "font-headline font-black tracking-tight leading-tight",
          level === 0 ? "text-xl" : "text-lg",
          level === 0 ? "text-white" : "text-foreground group-hover:text-primary"
        )}>
          {member.name}
        </h3>
        <p className={cn(
          "uppercase tracking-[0.2em] font-black mt-1",
          level === 0 ? "text-white/60 text-[8px]" : "text-primary text-[7px]"
        )}>
          {member.role}
        </p>
      </div>

      {/* Decorative pulse for children indicators */}
      {member.children && (
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/40 animate-ping" />
      )}
    </div>
  );
}

function MobileOrgItem({ member, level = 0 }: { member: OrgMember; level?: number }) {
  const [isOpen, setIsOpen] = useState(level < 1);
  const Icon = member.icon;

  return (
    <div className="w-full">
      <div
        onClick={() => member.children && setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-4 p-5 rounded-2xl border transition-all mb-3",
          level === 0
            ? "bg-primary border-primary text-white shadow-lg"
            : "bg-card/40 border-white/5 active:bg-primary/5 active:border-primary/20 text-foreground"
        )}
      >
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
          level === 0 ? "bg-white/20" : "bg-primary/10 text-primary"
        )}>
          <Icon className="w-5 h-5" />
        </div>

        <div className="flex-grow">
          <h4 className="font-headline font-black tracking-tight text-sm uppercase">{member.name}</h4>
          <p className={cn(
            "text-[9px] font-bold uppercase tracking-widest",
            level === 0 ? "text-white/60" : "text-primary"
          )}>{member.role}</p>
        </div>

        {member.children && (
          <div className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")}>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </div>
        )}
      </div>

      {member.children && isOpen && (
        <div className="ml-6 border-l border-primary/20 pl-4 space-y-2 mb-6">
          {member.children.map((child, i) => (
            <MobileOrgItem key={i} member={child} level={level + 1} />
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
    <section id="org" className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32 space-y-6 animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            <Crown className="w-3 h-3" />
            Gobierno Corporativo
          </div>
          <h2 className="font-headline text-5xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter uppercase">
            ESTRUCTURA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent italic px-1">ORGANIZACIONAL</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Un ecosistema de liderazgo coordinado para garantizar la excelencia en cada fase de nuestros servicios integrales.
          </p>
        </div>

        {/* Mobile View: Vertical Accordion */}
        <div className="md:hidden space-y-4 animate-reveal delay-300">
          <MobileOrgItem member={ORG_STRUCTURE} />
        </div>

        {/* Desktop View: Advanced Tree */}
        <div className="hidden md:flex flex-col items-center animate-reveal delay-300">
          {/* Root Level */}
          <DepartmentCard member={ORG_STRUCTURE} level={0} />

          {/* Level 1 Connectors and Grid */}
          <div className="relative mt-20 w-full">
            {/* Main Vertical Center Line */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary to-primary/40" />

            {/* Horizontal Connection Beam */}
            <div className="absolute top-[-48px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="grid grid-cols-5 gap-6">
              {ORG_STRUCTURE.children?.map((dept, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Vertical connector to dept */}
                  <div className="absolute top-[-48px] w-px h-12 bg-primary/20" />

                  <DepartmentCard member={dept} level={1} />

                  {/* Leaves (Level 2) */}
                  {dept.children && (
                    <div className="mt-12 space-y-4 w-full">
                      <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent mx-auto" />
                      {dept.children.map((child, j) => (
                        <div
                          key={j}
                          className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-center group/leaf hover:border-primary/20 transition-all duration-300"
                        >
                          <span className="text-[10px] font-black text-foreground/60 uppercase tracking-widest group-hover/leaf:text-primary transition-colors">
                            {child.name}
                          </span>
                          <p className="text-[8px] font-bold text-primary/40 uppercase mt-0.5">{child.role}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Accent Icons for "Professionalism" */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">Eficiencia</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">Sinergia</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Crown className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">Excelencia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
