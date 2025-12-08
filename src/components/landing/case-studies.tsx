"use client";

import Image from "next/image";
import { caseStudies } from "@/data/case-studies.data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel } from "@/components/Carousel";

export function CaseStudies() {
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

        {/* Carrusel reutilizable */}
        <Carousel step={320} interval={2500}>
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
        </Carousel>
      </div>
    </section>
  );
}
