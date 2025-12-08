"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
import { Card, CardContent } from "@/components/ui/card";
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
      title: "Redirigiendo a WhatsApp...",
      description: "Serás dirigido a WhatsApp para enviar tu mensaje.",
      variant: "default",
      duration: 1500,
    });

    setTimeout(() => {
      const mensaje = `Hola, mi nombre es ${values.name}. Mi correo es ${values.email}. Mensaje: ${values.message}`;
      const url = `https://wa.me/584121259744?text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(url, "_blank");
      form.reset();
    }, 2000);
  }

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden"
    >
      {/* Fondo decorativo animado */}

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary drop-shadow-lg">
            Contáctanos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para empezar tu próximo gran proyecto?{" "}
            <span className="font-bold text-accent">¡Hablemos!</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8 flex flex-col justify-center animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
            <Card className="bg-white/80 shadow-2xl border-0 p-8 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Phone className="w-8 h-8 text-accent animate-bounce" />
                Información de Contacto
              </h3>
              <p className="text-muted-foreground mb-6">
                Estamos disponibles para atender tus solicitudes por cualquiera
                de nuestros canales.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4 group">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0 transition-colors duration-300 group-hover:text-accent" />
                  <span className="transition-colors duration-300 group-hover:text-foreground font-medium">
                    Calle Buchivacoa, entre Calle Sierralta y Cristal, Coro,
                    Falcon 4101
                  </span>
                </div>
                <div className="my-4 rounded-lg overflow-hidden shadow-lg border border-accent/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d300.77115036467615!2d-69.66687014329209!3d11.409013337517528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sus!4v1764878555947!5m2!1ses!2sus"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación SIVCA"
                  />
                </div>
                <div className="flex items-center gap-4 group">
                  <FaWhatsapp className="w-8 h-8 text-green-500 flex-shrink-0 transition-colors duration-300 group-hover:text-accent animate-pulse" />
                  <a
                    href="https://wa.me/584121259744?text=Hola,%20estoy%20interesado%20en%20conocer%20más%20sobre%20los%20servicios%20de%20SIVCA.%20¿Podrían%20brindarme%20información%20y%20asesoría%20para%20mi%20proyecto?%20¡Gracias!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors font-medium"
                  >
                    WhatsApp: +58 (412) 125-9744
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <Mail className="w-8 h-8 text-primary flex-shrink-0 transition-colors duration-300 group-hover:text-accent" />
                  <a
                    href="mailto:admin.sivca@gmail.com"
                    className="hover:text-accent transition-colors font-medium"
                  >
                    admin.sivca@gmail.com
                  </a>
                </div>
              </div>
            </Card>
          </div>
          {/* Formulario de contacto */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre completo"
                              {...field}
                              className="bg-background/60 border-accent/30"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="tu@correo.com"
                              type="email"
                              {...field}
                              className="bg-background/60 border-accent/30"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Cuéntanos sobre tu proyecto..."
                              {...field}
                              rows={5}
                              className="bg-background/60 border-accent/30"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 via-green-400 to-green-600 text-white hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <FaWhatsapp className="w-5 h-5 animate-bounce" />
                      Enviar por WhatsApp
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
