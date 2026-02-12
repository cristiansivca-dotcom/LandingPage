"use client";

import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Sparkles, Trophy, Flame, Beer, Heart, Sprout } from "lucide-react";

export const categories = [
  {
    name: "Alimentos",
    icon: Trophy,
    brands: [
      { id: "brand-pan", name: "P.A.N.", logo: "/images/marcas/logo_PAN.webp" },
      { id: "brand-mazeite", name: "Mazeite", logo: "/images/marcas/logo_mazeite.png" },
      { id: "brand-primor", name: "Primor", logo: "/images/marcas/logo_primor.png" },
      { id: "brand-mavesa", name: "Mavesa", logo: "/images/marcas/logo_mavesa.png" },
      { id: "brand-toddy", name: "Toddy", logo: "/images/marcas/logo_toddy.png" },
      { id: "brand-quaker", name: "Quaker", logo: "/images/marcas/logo_quaker.png" },
      { id: "brand-efe", name: "Efe", logo: "/images/marcas/logo_efe.png" },
      { id: "brand-migurt", name: "Migurt", logo: "/images/marcas/logo_migurt.png" },
      { id: "brand-chef", name: "Chef", logo: "/images/marcas/logo_chef.png" },
      { id: "brand-margarina-mirasol", name: "Margarina Mirasol", logo: "/images/marcas/logo_margarita.png" },
      { id: "brand-nelly", name: "Nelly", logo: "/images/marcas/logo_nelly.png" },
      { id: "brand-pampero", name: "Pampero", logo: "/images/marcas/logo_pampero.png" },
      { id: "brand-rikesa", name: "Rikesa", logo: "/images/marcas/logo_rikesa.png" },
    ],
  },
  {
    name: "No Alcohólicas",
    icon: Flame,
    brands: [
      { id: "brand-maltin", name: "Maltin Polar", logo: "/images/marcas/logo_maltin.png" },
      { id: "brand-pepsi", name: "Pepsi", logo: "/images/marcas/logo_pepsi.png" },
      { id: "brand-7up", name: "7UP", logo: "/images/marcas/logo_7up.png" },
      { id: "brand-gatorade", name: "Gatorade", logo: "/images/marcas/logo_gatorade.png" },
      { id: "brand-lipton", name: "Lipton", logo: "/images/marcas/logo_lipton.png" },
      { id: "brand-minalba-agua", name: "Minalba Agua", logo: "/images/marcas/logo_minalba.png" },
      { id: "brand-minalba-gas", name: "Minalba con Gas", logo: "/images/marcas/logo_minalba_sparkling.png" },
      { id: "brand-minalba-flavors", name: "Minalba Flavors", logo: "/images/marcas/logo_yukery.png" },
      { id: "brand-minalba-soda", name: "Minalba Soda", logo: "/images/marcas/logo_yukypak.png" },
    ],
  },
  {
    name: "Cervecería",
    icon: Beer,
    brands: [
      { id: "brand-polar-zero", name: "Polar Zero", logo: "/images/marcas/logo_pilser.png" },
      { id: "brand-polar-ice", name: "Polar Ice", logo: "/images/marcas/logo_light.png" },
      { id: "brand-solera", name: "Solera", logo: "/images/marcas/logo_solera.png" },
      { id: "brand-bodegas-pomar", name: "Bodegas Pomar", logo: "/images/marcas/logo_bodegas-pomar.png" },
      { id: "brand-sangria-carorena", name: "Sangría Caroreña", logo: "/images/marcas/logo_caroreña.png" },
      { id: "brand-la-que-manda", name: "La que Manda", logo: "/images/marcas/logo_la_que_manda.png" },
    ],
  },
  {
    name: "PyG",
    icon: Sparkles,
    brands: [
      { id: "brand-las-llaves", name: "Las Llaves", logo: "/images/marcas/logo_las_llaves.png" },
      { id: "brand-diamante", name: "Diamante", logo: "/images/marcas/logo_multi_clean.png" },
      { id: "brand-ariel", name: "Ariel", logo: "/images/marcas/logo_ariel.jpg" },
      { id: "brand-downy", name: "Downy", logo: "/images/marcas/logo_downy.jpg" },
      { id: "brand-tide", name: "Tide", logo: "/images/marcas/logo_tide.svg" },
    ],
  },
  {
    name: "Mascotas",
    icon: Heart,
    brands: [
      { id: "brand-champs", name: "Champ's", logo: "/images/marcas/logo_champs.png" },
      { id: "brand-supercan", name: "Super Can", logo: "/images/marcas/logo_super_cam.png" },
      { id: "brand-dogourmet", name: "Dogourmet", logo: "/images/marcas/logo_dogourmet.webp" },
      { id: "brand-donkat", name: "Don Kat", logo: "/images/marcas/logo_donkat.png" },
      { id: "brand-oh-my-god", name: "Oh My God!", logo: "/images/marcas/logo_ohmaigat.png" },
    ],
  },
  {
    name: "Agropecuario",
    icon: Sprout,
    brands: [
      { id: "brand-protinal", name: "Protinal", logo: "/images/marcas/logo_procria.png" },
    ],
  },
];

export function Brands() {
  const [selectedTab, setSelectedTab] = React.useState(categories[0].name);

  return (
    <section id="brands" className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-8 animate-reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.3em] shadow-inner">
            <Sparkles className="w-4 h-4" />
            Alianzas Estratégicas
          </div>

          <h2 className="font-headline text-5xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter uppercase">
            MARCAS QUE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent italic px-1">IMPULSAMOS</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
            SIVCA es el puente entre la innovación de **Empresas Polar** y el mercado venezolano,
            potenciando la presencia de un portafolio legendario.
          </p>
        </div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="flex justify-center mb-20 overflow-visible">
            <div className="relative p-2 bg-white/[0.03] dark:bg-black/20 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-x-auto no-scrollbar max-w-full">
              <TabsList className="bg-transparent h-auto p-1 gap-2 md:gap-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={category.name}
                      value={category.name}
                      className={cn(
                        "flex items-center gap-3 px-8 py-4 rounded-[1.8rem] text-xs font-black uppercase tracking-widest transition-all duration-500",
                        "data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-[0_15px_30px_rgba(var(--primary),0.3)]",
                        "hover:text-primary data-[state=active]:hover:text-white"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{category.name}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
          </div>

          <div className="relative min-h-[400px]">
            {categories.map((category) => (
              <TabsContent
                key={category.name}
                value={category.name}
                className="mt-0 outline-none focus:ring-0"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 items-stretch animate-reveal">
                  {category.brands.map((brand, bIndex) => (
                    <div
                      key={brand.id}
                      className={cn(
                        "group relative aspect-square flex items-center justify-center p-10 rounded-[3rem] transition-all duration-700",
                        "bg-white/[0.03] dark:bg-black/20 backdrop-blur-xl border border-white/5",
                        "hover:bg-white dark:hover:bg-white hover:border-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.2)] hover:-translate-y-4"
                      )}
                      style={{ animationDelay: `${bIndex * 50}ms` }}
                    >
                      {/* Background Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl bg-primary" />

                      <div className="relative w-full h-full z-10">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          fill
                          className="object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                      </div>

                      {/* Brand Label on Hover */}
                      <div className="absolute -bottom-10 left-0 right-0 text-center opacity-0 group-hover:opacity-100 group-hover:-bottom-6 transition-all duration-500 pointer-events-none">
                        <span className="inline-block px-4 py-1.5 bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl border border-white/20">
                          {brand.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}