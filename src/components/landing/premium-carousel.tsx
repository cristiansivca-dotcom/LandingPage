"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumCarouselProps {
    children: React.ReactNode[];
    options?: any;
    className?: string;
}

export function PremiumCarousel({ children, options, className }: PremiumCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
        ...options,
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className={cn("relative group/carousel", className)}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-6">
                    {children.map((child, index) => (
                        <div key={index} className="flex-[0_0_auto] pl-6">
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between px-4 z-20">
                <button
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                    className={cn(
                        "w-12 h-12 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-2xl border border-white/30 flex items-center justify-center text-white transition-all duration-300 pointer-events-auto shadow-2xl",
                        "hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 group-hover/carousel:translate-x-0",
                        "opacity-80 group-hover/carousel:opacity-100 -translate-x-2 md:-translate-x-6 disabled:opacity-0"
                    )}
                    aria-label="Anterior"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                    className={cn(
                        "w-12 h-12 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-2xl border border-white/30 flex items-center justify-center text-white transition-all duration-300 pointer-events-auto shadow-2xl",
                        "hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 group-hover/carousel:translate-x-0",
                        "opacity-80 group-hover/carousel:opacity-100 translate-x-2 md:translate-x-6 disabled:opacity-0"
                    )}
                    aria-label="Siguiente"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-500",
                            selectedIndex === index
                                ? "w-8 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                                : "w-2 bg-primary/20 hover:bg-primary/40"
                        )}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
