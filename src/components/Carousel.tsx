"use client";

import { useEffect, useRef } from "react";

interface CarouselProps {
  children: React.ReactNode;
  step?: number; // píxeles a mover
  interval?: number; // tiempo en ms
}

export function Carousel({
  children,
  step = 320,
  interval = 2500,
}: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const autoplay = setInterval(() => {
      if (container) {
        if (scrollAmount + container.clientWidth >= container.scrollWidth) {
          scrollAmount = 0;
        } else {
          scrollAmount += step;
        }
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, interval);

    return () => clearInterval(autoplay);
  }, [step, interval]);

  return (
    <div
      ref={carouselRef}
      className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
    >
      {children}
    </div>
  );
}
