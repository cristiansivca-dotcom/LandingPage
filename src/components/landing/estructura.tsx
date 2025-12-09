"use client";

import React from "react";

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

function OrgNode({ member }: { member: OrgMember }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="bg-primary text-white rounded-lg shadow-lg px-4 py-2">
        <h3 className="font-bold">{member.name}</h3>
        <p className="text-sm opacity-80">{member.role}</p>
      </div>
      {member.children && (
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          {member.children.map((child, i) => (
            <OrgNode key={i} member={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export function OrgChart() {
  return (
    <section id="org" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Estructura Organizacional
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Así se organiza nuestra empresa para garantizar excelencia en cada
            área de servicio.
          </p>
        </div>
        <div className="flex justify-center">
          <OrgNode member={ORG_STRUCTURE} />
        </div>
      </div>
    </section>
  );
}
