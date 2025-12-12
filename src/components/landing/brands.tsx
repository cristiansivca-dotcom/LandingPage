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
    <section
      id="brands"
      className="relative py-16 md:py-24 bg-card overflow-hidden"
    >

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Marcas que Impulsamos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Como aliados estratégicos de Empresas Polar, tenemos el orgullo de
            potenciar la publicidad y comunicación de su icónico portafolio de
            marcas.
          </p>
        </div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
        >
          <div className="relative overflow-x-auto no-scrollbar pb-1">
            <TabsList className="relative inline-flex h-auto justify-start bg-transparent p-0 border-b-2 border-border">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="relative h-10 whitespace-nowrap rounded-none border-b-2 border-transparent bg-transparent px-4 text-base font-medium text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-accent data-[state=active]:text-primary data-[state=active]:shadow-none"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name}
              className="mt-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 py-8 items-center animate-in fade-in-50 duration-300">
                {category.brands.map((brand) => (
                  <div
                    key={brand.id}
                    className="group relative flex justify-center items-center w-40 h-28 rounded-lg border bg-background/50 p-4 transition-all duration-300 hover:bg-background hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={250}
                      height={150}
                      className="object-contain p-2 grayscale transition-all duration-300 group-hover:grayscale-0"
                    />
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