import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Eye, Rocket, ShieldCheck } from 'lucide-react';


export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Sobre Nosotros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground ">
            Somos una empresa venezolana especializada en servicios integrales
            de Logística, Construcción, Servicios de Publicidad, Organizacion de
            Eventos y Mantenimiento Industrial, comprometida con la excelencia
            operativa, la mejora continua y el desarrollo sostenible. Nuestro
            equipo humano, altamente capacitado, trabaja con pasión y
            responsabilidad para ofrecer soluciones que superen las expectativas
            de nuestros clientes, contribuyendo activamente al crecimiento del
            país.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full flex-shrink-0">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-primary">
                    Misión
                  </h3>
                  <p className="text-muted-foreground mt-2 text-justify">
                    Promover el éxito de nuestros clientes brindando todo el
                    confort y confianza de contar con la mejor empresa de
                    servicios, satisfaciendo todas sus necesidades, más aún por
                    encima de sus expectativas; además de sostener el
                    crecimiento de la empresa, así como de todo su personal, a
                    través de la implementación de las mejores prácticas de
                    gestión de calidad, generando valor agregado al servicio
                    ofrecido por nuestros clientes y contribuyendo con la
                    continuidad del negocio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-primary ">
                    Visión
                  </h3>
                  <p className="text-muted-foreground mt-2 text-justify">
                    Ser una organización dedicada a la prestación de servicios
                    en general, con alcance a nivel nacional e internacional.
                    Ser reconocida por la calidad técnica y humana de todo
                    nuestro personal, tanto por nuestros clientes como por
                    nuestra contribución al desarrollo de nuestro país.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-primary">
                    Política de calidad
                  </h3>
                  <p className="text-muted-foreground mt-2 text-justify">
                    Es política de la empresa Servicios Integrales de Venezuela
                    SIVCA, C.A., realizar las actividades requeridas por el
                    cliente, cumpliendo con la legislación vigente en materia de
                    seguridad y salud ocupacional y otros requisitos que la
                    organización suscriba, y así salvaguardar la integridad,
                    seguridad y salud de sus trabajadores, además de fomentar el
                    mejoramiento continuo en nuestros procesos y personal.
                  </p>
                  <h6 className="text-primary">
                    Servicios Integrales de Venezuela (SIVCA C.A)
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
