"use client";

import * as React from "react";
import Slider, { Settings } from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", style, onClick }, ref) => {
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute h-8 w-8 rounded-full", className)}
      style={style}
      onClick={onClick}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", style, onClick }, ref) => {
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute h-8 w-8 rounded-full", className)}
      style={style}
      onClick={onClick}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

// Configuración base del carrusel
const baseSettings: Settings = {
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  autoplay: false,
  speed: 600,
  autoplaySpeed: 4000,
  cssEase: "ease",
  pauseOnHover: true,
  // centerMode: false, // Eliminado para responsividad
};

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Settings
>(({ className, children, ...props }, ref) => {
  const sliderRef = React.useRef<any>(null);

  // Mezcla los settings base con los props recibidos (como responsive y slidesToShow)
  const mergedSettings = { ...baseSettings, ...props };

  return (
    <div ref={ref} className={cn("relative", className)}>
      <Slider {...mergedSettings} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  );
});
Carousel.displayName = "Carousel";

export { Carousel, CarouselPrevious, CarouselNext };
