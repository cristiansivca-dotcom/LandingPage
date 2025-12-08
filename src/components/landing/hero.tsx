import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import hero from "@/assets/image/hero.svg";
import logo from "@/assets/image/logo_sivca.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen w-full flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Imagen de fondo */}
      <Image
        src={hero}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/40 to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-0 flex flex-col items-center justify-center">
        {/* Logo de la empresa */}
        <div className="flex justify-center mb-6 md:mb-8">
          <Image
            src={logo}
            alt="Logo SIVCA"
            width={50}
            height={50}
            className="drop-shadow-lg w-28 h-auto md:w-48"
            priority
          />
        </div>

        <h1
          className="font-headline text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
        >
          Servicios Integrales de Venezuela C.A
        </h1>

        {/* Subtítulo/tagline */}
        <p
          className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-accent-foreground"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
        >
          Excelencia y Calidad de Servicios
        </p>

        {/* Texto descriptivo */}
        <p
          className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
        >
          Expertos en{" "}
          <span className="text-accent font-semibold">logística</span>,{" "}
          <span className="text-accent font-semibold">construcción</span>,{" "}
          <span className="text-accent font-semibold">publicidad</span> y{" "}
          <span className="text-accent font-semibold">
            organización de eventos
          </span>
          . Nuestro compromiso es superar expectativas y aportar al crecimiento
          del país.
        </p>

        {/* Botones CTA */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto transition-transform hover:scale-105 shadow-lg"
          >
            <Link href="#services">Explora Nuestros Servicios</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto transition-transform hover:scale-105 shadow-lg"
          >
            <Link href="#contact">Contáctanos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
