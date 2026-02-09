"use client";

import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export const categories = [
  {
    name: "Alimentos",
    brands: [
      { id: "brand-pan", name: "P.A.N.", logo: "/images/marcas/logo_PAN.webp" },
      {
        id: "brand-mazeite",
        name: "Mazeite",
        logo: "/images/marcas/logo_mazeite.png",
      },
      {
        id: "brand-primor",
        name: "Primor",
        logo: "/images/marcas/logo_primor.png",
      },
      {
        id: "brand-mavesa",
        name: "Mavesa",
        logo: "/images/marcas/logo_mavesa.png",
      },
      {
        id: "brand-toddy",
        name: "Toddy",
        logo: "/images/marcas/logo_toddy.png",
      },
      {
        id: "brand-quaker",
        name: "Quaker",
        logo: "/images/marcas/logo_quaker.png",
      },
      { id: "brand-efe", name: "Efe", logo: "/images/marcas/logo_efe.png" },
      {
        id: "brand-migurt",
        name: "Migurt",
        logo: "/images/marcas/logo_migurt.png",
      },
      { id: "brand-chef", name: "Chef", logo: "/images/marcas/logo_chef.png" },
      {
        id: "brand-margarina-mirasol",
        name: "Margarina Mirasol",
        logo: "/images/marcas/logo_margarita.png",
      },
      {
        id: "brand-nelly",
        name: "Nelly",
        logo: "/images/marcas/logo_nelly.png",
      },
      {
        id: "brand-pampero",
        name: "Pampero",
        logo: "/images/marcas/logo_pampero.png",
      },
      {
        id: "brand-rikesa",
        name: "Rikesa",
        logo: "/images/marcas/logo_rikesa.png",
      },
    ],
  },
  {
    name: "No Alcohólicas",
    brands: [
      {
        id: "brand-maltin",
        name: "Maltin Polar",
        logo: "/images/marcas/logo_maltin.png",
      },
      {
        id: "brand-pepsi",
        name: "Pepsi",
        logo: "/images/marcas/logo_pepsi.png",
      },
      { id: "brand-7up", name: "7UP", logo: "/images/marcas/logo_7up.png" },
      {
        id: "brand-gatorade",
        name: "Gatorade",
        logo: "/images/marcas/logo_gatorade.png",
      },
      {
        id: "brand-lipton",
        name: "Lipton",
        logo: "/images/marcas/logo_lipton.png",
      },
      {
        id: "brand-minalba-agua",
        name: "Minalba Agua",
        logo: "/images/marcas/logo_minalba.png",
      },
      {
        id: "brand-minalba-gas",
        name: "Minalba con Gas",
        logo: "/images/marcas/logo_minalba_sparkling.png",
      },
      {
        id: "brand-minalba-flavors",
        name: "Minalba Flavors",
        logo: "/images/marcas/logo_yukery.png",
      },
      {
        id: "brand-minalba-soda",
        name: "Minalba Soda",
        logo: "/images/marcas/logo_yukypak.png",
      },
    ],
  },
  {
    name: "Cervecería",
    brands: [
      {
        id: "brand-polar-zero",
        name: "Polar Zero",
        logo: "/images/marcas/logo_pilser.png",
      },
      {
        id: "brand-polar-ice",
        name: "Polar Ice",
        logo: "/images/marcas/logo_light.png",
      },
      {
        id: "brand-solera",
        name: "Solera",
        logo: "/images/marcas/logo_solera.png",
      },
      {
        id: "brand-bodegas-pomar",
        name: "Bodegas Pomar",
        logo: "/images/marcas/logo_bodegas-pomar.png",
      },
      {
        id: "brand-sangria-carorena",
        name: "Sangría Caroreña",
        logo: "/images/marcas/logo_caroreña.png",
      },
      {
        id: "brand-la-que-manda",
        name: "La que Manda",
        logo: "/images/marcas/logo_la_que_manda.png",
      },
    ],
  },
  {
    name: "PyG",
    brands: [
      {
        id: "brand-las-llaves",
        name: "Las Llaves",
        logo: "/images/marcas/logo_las_llaves.png",
      },
      {
        id: "brand-diamante",
        name: "Diamante",
        logo: "/images/marcas/logo_multi_clean.png",
      },
      {
        id: "brand-ariel",
        name: "Ariel",
        logo: "/images/marcas/logo_ariel.jpg",
      },
      {
        id: "brand-downy",
        name: "Downy",
        logo: "/images/marcas/logo_downy.jpg",
      },
      {
        id: "brand-tide",
        name: "Tide",
        logo: "/images/marcas/logo_tide.svg",
      },
    ],
  },
  {
    name: "Mascotas",
    brands: [
      {
        id: "brand-champs",
        name: "Champ's",
        logo: "/images/marcas/logo_champs.png",
      },
      {
        id: "brand-supercan",
        name: "Super Can",
        logo: "/images/marcas/logo_super_cam.png",
      },
      {
        id: "brand-dogourmet",
        name: "Dogourmet",
        logo: "/images/marcas/logo_dogourmet.webp",
      },
      {
        id: "brand-donkat",
        name: "Don Kat",
        logo: "/images/marcas/logo_donkat.png",
      },
      {
        id: "brand-oh-my-god",
        name: "Oh My God!",
        logo: "/images/marcas/logo_ohmaigat.png",
      },
    ],
  },
  {
    name: "Agropecuario",
    brands: [
      {
        id: "brand-protinal",
        name: "Protinal",
        logo: "/images/marcas/logo_procria.png",
      },
    ],
  },
];

export function Brands() {
  const [selectedTab, setSelectedTab] = React.useState(categories[0].name);

  return (
    <section id="brands" className="py-24 md:py-40 bg-card/20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(var(--primary),0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            Alianzas Estratégicas
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter">
            MARCAS QUE <span className="text-primary italic">IMPULSAMOS</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Como aliados estratégicos de Empresas Polar, potenciamos la
            comunicación de su icónico portafolio a nivel nacional.
          </p>
        </div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-2 bg-background/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-x-auto no-scrollbar max-w-full">
              <TabsList className="bg-transparent h-auto gap-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.name}
                    value={category.name}
                    className="px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl shadow-primary/20 hover:text-primary data-[state=active]:hover:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {categories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name}
              className="mt-0 outline-none focus:ring-0"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-stretch animate-reveal">
                {category.brands.map((brand, bIndex) => (
                  <div
                    key={brand.id}
                    className="group relative aspect-square flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 transition-all duration-500 hover:bg-white hover:border-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 animate-reveal"
                    style={{ animationDelay: `${bIndex * 50}ms` }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                      />
                    </div>

                    {/* Tooltip o nombre al hover */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 pointer-events-none">
                      <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-tighter rounded-full shadow-lg">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}