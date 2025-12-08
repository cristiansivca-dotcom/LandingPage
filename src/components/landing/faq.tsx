import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Truck,
  Hammer,
  Palette,
  Megaphone,
  CalendarDays,
  Star,
} from "lucide-react";

const faqs = [
  {
    icon: Truck,
    question: "¿Qué diferencia a SIVCA en logística?",
    answer:
      "Ofrecemos soluciones integrales de transporte y distribución, con eficiencia, seguridad y puntualidad, adaptadas a cada cliente.",
  },
  {
    icon: Hammer,
    question: "¿Cómo abordan los proyectos de construcción?",
    answer:
      "Ejecutamos obras con altos estándares de calidad y sostenibilidad, contribuyendo al desarrollo del país y superando expectativas.",
  },
  {
    icon: Palette,
    question: "¿Qué servicios de diseño gráfico ofrecen?",
    answer:
      "Creamos piezas gráficas innovadoras que fortalecen la identidad visual de tu marca y generan impacto positivo.",
  },
  {
    icon: Megaphone,
    question: "¿Qué tipo de campañas publicitarias realizan?",
    answer:
      "Diseñamos campañas estratégicas que conectan con tu audiencia y potencian el crecimiento de tu empresa.",
  },
  {
    icon: CalendarDays,
    question: "¿Organizan eventos corporativos y sociales?",
    answer:
      "Sí. Planificamos y ejecutamos eventos memorables con excelencia y atención al detalle.",
  },
  {
    icon: Star,
    question: "¿Cómo puedo comenzar a trabajar con ustedes?",
    answer:
      "Solo necesitas contactarnos por nuestra web, correo o teléfono. Coordinaremos una reunión inicial para entender tu proyecto y proponerte la mejor solución.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Aquí respondemos las dudas más comunes sobre nuestros servicios.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="bg-card rounded-lg shadow-md border px-6 transition-all duration-300 hover:border-primary"
              >
                <AccordionTrigger className="flex items-center gap-3 text-left font-semibold text-lg hover:no-underline text-primary">
                  <faq.icon className="h-6 w-6 text-primary" />
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4 pl-9">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
