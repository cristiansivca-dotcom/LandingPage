import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Eye, Rocket, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';


export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section id="about" className="py-24 md:py-44 bg-card/20 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(var(--accent),0.02)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl animate-reveal">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-1 transition-opacity group-hover:opacity-0" />
            <div className="relative aspect-[4/5] md:aspect-[4/3] w-full overflow-hidden">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            {/* Badge flotante en la imagen */}
            <div className="absolute bottom-10 left-10 right-10 p-8 bg-background/60 backdrop-blur-2xl border border-white/10 rounded-3xl z-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-xl font-black text-foreground mb-2">Compromiso Total</h4>
              <p className="text-sm text-muted-foreground font-medium">Lideramos el mercado con pasión y responsabilidad técnica.</p>
            </div>
          </div>

          <div className="space-y-12 animate-reveal delay-200">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                Nuestra Identidad
              </div>
              <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter">
                CONSTRUYENDO EL <br />
                <span className="text-primary italic">FUTURO</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed text-justify lg:text-left">
                Servicios Integrales de Venezuela (SIVCA C.A) es más que una empresa;
                es un motor de soluciones estratégicas diseñado para superar los desafíos
                más exigentes de la industria nacional.
              </p>
            </div>

            <div className="grid gap-8">
              {[
                {
                  icon: Rocket,
                  title: "Misión",
                  text: "Promover el éxito de nuestros clientes brindando todo el confort y confianza de contar con la mejor empresa de servicios, satisfaciendo todas sus necesidades, más aún por encima de sus expectativas; además de sostener el crecimiento de la empresa, así como de todo su personal, a través de la implementación de las mejores prácticas de gestión de calidad, generando valor agregado al servicio ofrecido por nuestros clientes y contribuyendo con la continuidad del negocio.",
                  color: "bg-primary"
                },
                {
                  icon: Eye,
                  title: "Visión",
                  text: "Ser una organización dedicada a la prestación de servicios en general, con alcance a nivel nacional e internacional. Ser reconocida por la calidad técnica y humana de todo nuestro personal, tanto por nuestros clientes como por nuestra contribución al desarrollo de nuestro país.",
                  color: "bg-accent"
                },
                {
                  icon: ShieldCheck,
                  title: "Política de calidad",
                  text: "Es política de la empresa Servicios Integrales de Venezuela SIVCA, C.A., realizar las actividades requeridas por el cliente, cumpliendo con la legislación vigente en materia de seguridad y salud ocupacional y otros requisitos que la organización suscriba, y así salvaguardar la integridad, seguridad y salud de sus trabajadores, además de fomentar el mejoramiento continuo en nuestros procesos y personal.",
                  color: "bg-foreground"
                }
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-6 p-6 rounded-[2rem] hover:bg-white/5 transition-colors group">
                  <div className={cn("w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110", item.color)}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-black text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-medium leading-relaxed text-sm lg:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
