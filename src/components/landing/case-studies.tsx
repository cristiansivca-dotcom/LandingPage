"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies.data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel } from "@/components/Carousel";
import { ExternalLink, Hash } from "lucide-react";

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
        <span key={i} className="text-muted-foreground/60 text-xs italic">
          {part}
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
    <section id="case-studies" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(var(--primary),0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            Nuestro Impacto
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter">
            CASOS DE <span className="text-primary italic">ÉXITO</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Resultados tangibles que demuestran nuestro compromiso con la excelencia
            y la capacidad de transformar desafíos en oportunidades.
          </p>
        </div>

        <div className="relative animate-reveal delay-300">
          <Carousel step={400} interval={3500}>
            {caseStudies.map((study, index) => {
              const studyImage = PlaceHolderImages.find((p) => p.id === study.id);
              return (
                <div
                  key={study.id}
                  className="snap-center flex-shrink-0 w-[350px] md:w-[450px] group"
                >
                  <div className="relative h-full bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-primary/20 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] flex flex-col">
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {studyImage && (
                        <Image
                          src={studyImage.imageUrl}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute top-6 right-6 z-20">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4 text-primary text-[10px] font-black uppercase tracking-widest">
                        <Hash className="w-3 h-3" />
                        Proyecto Destacado
                      </div>
                      <h3 className="font-headline text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <div className="text-muted-foreground line-clamp-4 font-medium leading-relaxed">
                        {parseInstagramLinks(study.description)}
                      </div>

                      <div className="mt-auto pt-8 flex items-center justify-between">
                        <div className="w-10 h-1 bg-primary/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-1000 group-hover:w-full"
                            style={{ width: '30%' }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-tighter">
                          0{index + 1} / 0{caseStudies.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
