"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies.data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PremiumCarousel } from "./premium-carousel";
import { ArrowUpRight, Hash, Sparkles } from "lucide-react";

// 🔧 Función para transformar @usuario en link a Instagram y manejar hashtags
function parseInstagramLinks(text: string) {
  const regex = /(@[a-zA-Z0-9._]+|#[a-zA-Z0-9._]+)/g; // detecta @usuario y #hashtag
  return text.split(regex).map((part, i) => {
    if (part.startsWith("@")) {
      const username = part.substring(1);
      return (
        <a
          key={i}
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors font-bold inline-flex items-center gap-0.5"
        >
          {part}
        </a>
      );
    }
    if (part.startsWith("#")) {
      return (
        <span key={i} className="text-muted-foreground/40 text-[10px] font-medium uppercase tracking-wider">
          {part}{" "}
        </span>
      );
    }
    return part;
  });
}

export function CaseStudies() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="case-studies" className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="space-y-6 max-w-2xl animate-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
              <Sparkles className="w-3 h-3" />
              Impacto Real
            </div>
            <h2 className="font-headline text-5xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
              CASOS DE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50 italic px-1">ÉXITO</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md font-medium leading-relaxed mb-4 animate-reveal delay-200">
            Resultados que demuestran nuestro compromiso con la excelencia y la capacidad de transformar retos en victorias.
          </p>
        </div>

        <div className="animate-reveal delay-300">
          <PremiumCarousel>
            {caseStudies.map((study, index) => {
              const studyImage = PlaceHolderImages.find((p) => p.id === study.id);
              return (
                <div
                  key={study.id}
                  className="w-[300px] sm:w-[380px] md:w-[480px] h-full"
                >
                  <div className="relative group h-full bg-white/[0.02] dark:bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-primary/30 hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(0,0,0,0.25)] flex flex-col">
                    {/* Image Header - Clickable to Instagram */}
                    <a
                      href={study.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full aspect-[16/11] overflow-hidden block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      {studyImage && (
                        <Image
                          src={studyImage.imageUrl}
                          alt={study.title}
                          fill
                          className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                        />
                      )}

                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 z-20">
                        <div className="px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          0{index + 1}
                        </div>
                      </div>

                      <div className="absolute top-6 right-6 z-20">
                        <div className="w-12 h-12 rounded-2xl bg-primary backdrop-blur-md flex items-center justify-center text-white scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-[0_10px_30px_rgba(var(--primary),0.3)]">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>
                    </a>

                    <div className="p-8 md:p-10 flex flex-col flex-grow relative overflow-hidden">
                      {/* Accent Line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-30" />

                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-px bg-primary/40" />
                        <span className="text-primary text-[10px] font-black uppercase tracking-widest">
                          Proyecto Destacado
                        </span>
                      </div>

                      <h3 className="font-headline text-2xl md:text-3xl font-black text-foreground mb-6 leading-tight group-hover:text-primary transition-colors duration-500">
                        {study.title}
                      </h3>

                      <div className="text-muted-foreground/80 line-clamp-3 text-base font-medium leading-[1.6] group-hover:text-muted-foreground transition-colors">
                        {parseInstagramLinks(study.description)}
                      </div>

                      <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                        <div className="flex -space-x-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-card flex items-center justify-center overflow-hidden">
                              <Image
                                src={`https://i.pravatar.cc/100?img=${index * 10 + i}`}
                                alt="Avatar"
                                width={32}
                                height={32}
                                className="object-cover"
                              />
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full border-2 border-background bg-primary text-[8px] font-bold flex items-center justify-center text-white">
                            +10
                          </div>
                        </div>

                        <a
                          href={study.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 hover:underline"
                        >
                          Ver Detalles
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </PremiumCarousel>
        </div>
      </div>
    </section>
  );
}
