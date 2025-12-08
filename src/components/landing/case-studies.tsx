"use client";

import Slider from "react-slick";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies.data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CaseStudies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // <-- Activa el autoplay
    autoplaySpeed: 1000, // <-- Velocidad de transición automática (ms)
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
    ],
  };

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
        <Slider {...settings} className="w-full max-w-5xl mx-auto">
          {caseStudies.map((study) => {
            const studyImage = PlaceHolderImages.find((p) => p.id === study.id);
            return (
              <div
                key={study.id}
                className="flex justify-center items-center px-0 sm:px-3 h-full min-w-0"
              >
                <div className="w-full max-w-lg bg-white/90 rounded-xl shadow-2xl p-6 mx-auto">
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
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
