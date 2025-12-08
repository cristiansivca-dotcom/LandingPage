import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";


import logoPolar from "@/assets/image/logo_polar.webp";
import logoInces from "@/assets/image/logo_INCES.png";
import logoIESV from "@/assets/image/logo_IESV.png";
import logoPETREX from "@/assets/image/logo_petrex.png";
import logoMinaguas from "@/assets/image/logo_minagua.png";

const logos = [
  { src: logoPolar, alt: "Empresas Polar" },
  { src: logoInces, alt: "INCES" },
  { src: logoIESV, alt: "IESV" },
  { src: logoPETREX, alt: "PETREX" },
  { src: logoMinaguas, alt: "Ministerio del Poder Popular de Atención de las Aguas",},
];

export function Partnership() {
  return (
    <section id="partnerships" className="py-16 md:py-24 bg-card">

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">
            Aliados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estas son algunas de las empresas y organizaciones con las que hemos
            trabajado y colaborado.
          </p>
        </div>
        <div className="flex justify-center">
          <Carousel
            slidesToShow={4}
            responsive={[
              {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            className="w-full max-w-5xl"
          >
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex flex-col items-center justify-center h-32"
              >
                <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center w-48 h-24">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain max-h-16 w-auto"
                  />
                </div>
                <span className="mt-4 text-sm text-muted-foreground text-center">
                  {logo.alt}
                </span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
