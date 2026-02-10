"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z
    .string()
    .email({ message: "Por favor, introduce un correo electrónico válido." }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export function Contact() {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Conectando con WhatsApp",
      description: "Preparando tu mensaje seguro...",
      variant: "default",
    });

    setTimeout(() => {
      const mensaje = `Hola SIVCA! Mi nombre es ${values.name}. Mi correo es ${values.email}. Me gustaría consultar: ${values.message}`;
      const url = `https://wa.me/584121259744?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
      form.reset();
    }, 1500);
  }

  if (!mounted) return null;

  return (
    <section id="contact" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            Canales Directos
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter">
            INICIEMOS SU <span className="text-primary italic">PROYECTO</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Estamos listos para transformar sus necesidades en soluciones técnicas
            de vanguardia. Contáctenos hoy mismo.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
          {/* Columna de Información */}
          <div className="lg:col-span-5 space-y-8 animate-reveal delay-300">
            <div className="bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 space-y-10">
              <div className="space-y-4">
                <h3 className="font-headline text-3xl font-black text-foreground tracking-tight">Estemos en Contacto</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Visite nuestra sede principal o utilice nuestros medios digitales para una atención personalizada inmediata.
                </p>
              </div>

              <div className="space-y-6">
                <ContactInfoItem
                  icon={MapPin}
                  label="Ubicación Sede"
                  value="Calle Buchivacoa, entre Sierralta y Cristal, Coro, Falcon"
                />
                <ContactInfoItem
                  icon={Phone}
                  label="Teléfono / WhatsApp"
                  value="+58 (412) 125-9744"
                  href="https://wa.me/584121259744"
                />
                <ContactInfoItem
                  icon={Mail}
                  label="Correo Electrónico"
                  value="admin.sivca@gmail.com"
                  href="mailto:admin.sivca@gmail.com"
                />
              </div>

              {/* Mapa Minimalista */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d425.35443103932374!2d-69.66648309004644!3d11.40915282911713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e842bff2cdf931b%3A0x6d7ff321d2d8a826!2sServicios%20Integrales%20de%20Venezuela%20(SIVCA)!5e1!3m2!1ses!2sve!4v1766152676712!5m2!1ses!2sve"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Formulario Estilizado */}
          <div className="lg:col-span-7 animate-reveal delay-500">
            <div className="bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-primary/10">
                <MessageSquare className="w-32 h-32" />
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Nombre Completo</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ej: Juan Pérez"
                              {...field}
                              className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-primary focus:ring-primary/20 transition-all"
                            />
                          </FormControl>
                          <FormMessage className="text-[10px] uppercase font-bold" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Email Corporativo</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="tu@correo.com"
                              {...field}
                              className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-primary focus:ring-primary/20 transition-all"
                            />
                          </FormControl>
                          <FormMessage className="text-[10px] uppercase font-bold" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Detalles del Requerimiento</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describa brevemente su necesidad o consulta..."
                            {...field}
                            rows={6}
                            className="bg-white/5 border-white/10 rounded-2xl focus:border-primary focus:ring-primary/20 transition-all resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-[10px] uppercase font-bold" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-16 rounded-2xl bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Solicitud
                  </Button>

                  <div className="text-center">
                    <p className="text-[9px] text-muted-foreground/60 font-medium uppercase tracking-[0.1em]">
                      Al enviar este formulario, usted acepta nuestra política de privacidad y manejo de datos.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <div className="flex items-start gap-5 group/item">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover/item:bg-primary group-hover/item:text-white group-hover/item:rotate-12">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">{label}</p>
        <p className="font-medium text-foreground transition-colors group-hover/item:text-primary leading-tight">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {Content}
      </a>
    );
  }

  return Content;
}

