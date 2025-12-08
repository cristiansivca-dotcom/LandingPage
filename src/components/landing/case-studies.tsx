"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { caseStudies } from "@/data/case-studies.data";
import { PlaceHolderImages } from "@/lib/placeholder-images";


function linkifyInstagram(text: string) {
  return text.split(/(@\w+)/g).map((part, idx) => {
    if (part.startsWith("@")) {
      const username = part.slice(1);
      return (
        <a
          key={idx}
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

export function CaseStudies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
  };

  return (
    <section
      id="case-studies"
      className="relative py-16 md:py-24 bg-card overflow-hidden"
    >

      <div className="relative z-10 container mx-auto px-2 sm:px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary drop-shadow-lg">
            Casos de Éxito
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Resultados que hablan por sí solos. Proyectos que han dejado huella.
          </p>
        </div>
        <div className="relative">
          <Slider {...settings} className="w-full max-w-5xl mx-auto">
            {caseStudies.map((study) => {
              const studyImage = PlaceHolderImages.find(
                (p) => p.id === study.id
              );
              return (
                <div
                  key={study.id}
                  className="flex justify-center items-center px-0 sm:px-3 h-full min-w-0"
                >
                  <Card className="w-full max-w-lg h-full flex flex-col overflow-hidden group bg-white/90 backdrop-blur-md shadow-2xl border-0 transition-all duration-300 hover:shadow-accent hover:-translate-y-2">
                    <CardHeader className="p-0">
                      <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
                        {studyImage && (
                          <Image
                            src={studyImage.imageUrl}
                            alt={study.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            data-ai-hint={studyImage.imageHint}
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <CardTitle className="font-headline text-xl mb-2 text-primary">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="flex-grow text-base text-muted-foreground">
                        {linkifyInstagram(study.description)}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
