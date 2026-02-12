"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Compass, ShieldCheck, History, Award, Sparkles, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  const identityItems = [
    {
      icon: Target,
      title: "Misión",
      text: "Promover el éxito de nuestros clientes brindando todo el confort y confianza de contar con la mejor empresa de servicios, satisfaciendo todas sus necesidades, más aún por encima de sus expectativas; además de sostener el crecimiento de la empresa, así como de todo su personal, a través de la implementación de las mejores prácticas de gestión de calidad, generando valor agregado al servicio ofrecido por nuestros clientes y contribuyendo con la continuidad del negocio.",
      color: "bg-primary",
      glow: "hover:shadow-[0_20px_50px_rgba(var(--primary),0.2)]"
    },
    {
      icon: Compass,
      title: "Visión",
      text: "Ser una organización dedicada a la prestación de servicios en general, con alcance a nivel nacional e internacional. Ser reconocida por la calidad técnica y humana de todo nuestro personal, tanto por nuestros clientes como por nuestra contribución al desarrollo de nuestro país.",
      color: "bg-accent",
      glow: "hover:shadow-[0_20px_50px_rgba(var(--accent),0.2)]"
    },
    {
      icon: ShieldCheck,
      title: "Política de Calidad",
      text: "Es política de la empresa Servicios Integrales de Venezuela SIVCA, C.A., realizar las actividades requeridas por el cliente, cumpliendo con la legislación vigente en materia de seguridad y salud ocupacional y otros requisitos que la organización suscriba, y así salvaguardar la integridad, seguridad y salud de sus trabajadores, además de fomentar el mejoramiento continuo en nuestros procesos y personal.",
      color: "bg-foreground",
      glow: "hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
    }
  ];

  return (
    <section id="about" className="py-32 md:py-56 bg-background relative overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate_x_1/2" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate_x_1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left: Cinematic Image with Glass Frame */}
          <div className="relative group animate-reveal">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-all duration-1000 ease-out"
                />
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-12 -right-12 p-10 bg-white dark:bg-black/40 backdrop-blur-3xl border border-white/20 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] z-2 animate-bounce-slow">
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-black text-primary leading-none">7+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mt-2">Años de</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Excelencia</span>
              </div>
            </div>

            {/* Quality Seal */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/90 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
              <Award className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Right: Content & Identity */}
          <div className="space-y-16">
            <div className="space-y-8 text-center lg:text-left animate-reveal delay-200">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-inner">
                <Sparkles className="w-3.5 h-3.5" />
                Nuestra Identidad
              </div>

              <h2 className="font-headline text-5xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter uppercase">
                CONSTRUYENDO EL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent italic px-1">FUTURO</span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                Servicios Integrales de Venezuela (SIVCA C.A) es el motor estratégico diseñado para superar los desafíos técnicos más complejos de la industria nacional.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest">Sólida Trayectoria</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest">Crecimiento Continuo</span>
                </div>
              </div>
            </div>

            {/* Identity Grid */}
            <div className="grid gap-6 animate-reveal delay-300">
              {identityItems.map((item, i) => (
                <div
                  key={item.title}
                  className={cn(
                    "flex items-start gap-8 p-8 rounded-[2.5rem] transition-all duration-500 group relative overflow-hidden",
                    "bg-white/[0.02] dark:bg-black/20 backdrop-blur-xl border border-white/5",
                    "hover:bg-white dark:hover:bg-white hover:border-white hover:-translate-x-2 lg:hover:translate-x-4",
                    item.glow
                  )}
                >
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-2xl transition-all duration-700 group-hover:rotate-[360deg]",
                    item.color
                  )}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-headline text-2xl font-black text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base group-hover:text-black/80 dark:group-hover:text-black/80 transition-colors">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
