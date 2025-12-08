"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies.data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CaseStudies() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const step = 320; // píxeles a mover cada vez (ajusta según el ancho de tus cards)
    const interval = setInterval(() => {
      if (container) {
        // Si llega al final, vuelve al inicio
        if (scrollAmount + container.clientWidth >= container.scrollWidth) {
          scrollAmount = 0;
        } else {
          scrollAmount += step;
        }
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2500); // cada 2.5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Casos de Éxito
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Resultados que hablan por sí solos. Proyectos que han dejado huella.
          </p>
        </div>

        {/* Carrusel con autoplay */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
        >
          {caseStudies.map((study) => {
            const studyImage = PlaceHolderImages.find((p) => p.id === study.id);
            return (
              <div
                key={study.id}
                className="snap-center flex-shrink-0 w-80 bg-white/90 rounded-xl shadow-2xl p-6"
              >
                <div className="relative w-full aspect-video mb-4 rounded-xl overflow-hidden">
                  {studyImage && (
                    <Image
                      src={studyImage.imageUrl}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <h3 className="font-headline text-xl mb-2 text-primary text-center">
                  {study.title}
                </h3>
                <p className="text-base text-muted-foreground text-center">
                  {study.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
