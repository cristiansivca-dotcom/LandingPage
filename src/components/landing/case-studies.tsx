"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { caseStudies } from "@/data/case-studies.data";
import { Carousel } from "@/components/ui/carousel";
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
  const [current, setCurrent] = useState(0);
  const total = caseStudies.length;
  const carouselRef = useRef<any>(null);

  return (
    <section
      id="case-studies"
      className="relative py-16 md:py-24 bg-card overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-2 sm:px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Casos de Éxito
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Resultados que hablan por sí solos. Proyectos que han dejado huella.
          </p>
        </div>
        <div className="relative">
          <Carousel
            ref={carouselRef}
            slidesToShow={3}
            responsive={[
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
            ]}
            className="w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
          >
            {caseStudies.map((study) => {
              const studyImage = PlaceHolderImages.find(
                (p) => p.id === study.id
              );
              return (
                <div className="p-2 sm:p-3 h-full min-w-0">
                  <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <CardHeader className="p-0">
                      <div className="relative w-full aspect-video overflow-hidden">
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
                    <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                      <CardTitle className="font-headline text-lg sm:text-xl mb-2 text-primary">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="flex-grow text-base">
                        {linkifyInstagram(study.description)}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
