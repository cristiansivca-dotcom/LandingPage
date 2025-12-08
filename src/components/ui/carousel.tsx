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
      className={cn("absolute  h-8 w-8 rounded-full", className)}
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

const settings = {
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  speed: 10100,
  autoplaySpeed: 100,
  cssEase: "linear",
  pauseOnHover: true,
  centerMode: true,
};

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Settings
>(({ className, children, ...props }, ref) => {
  const sliderRef = React.useRef<any>(null);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <Slider {...(settings ?? {})} {...(props ?? {})} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  );
});
Carousel.displayName = "Carousel";

CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselPrevious, CarouselNext };
