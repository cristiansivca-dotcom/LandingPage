"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, ArrowRight, ExternalLink } from "lucide-react";

export function Catalog() {
  return (
    <section id="catalog" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative group">
            {/* Animación de brillo al pasar el ratón */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Nuevo Lanzamiento</span>
                </div>
                
                <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
                  Descubre Nuestro <br />
                  <span className="text-primary italic">Catálogo Digital</span>
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Explora nuestra amplia gama de productos y servicios con detalles técnicos, 
                  imágenes en alta resolución y disponibilidad en tiempo real. Todo lo que necesitas 
                  de SIVCA en un solo lugar.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-lg shadow-xl hover:scale-105 transition-all">
                    <Link href="https://catalogo.sivca.com.ve" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Visitar Catálogo <ExternalLink className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg hover:bg-primary/5 transition-all">
                    <Link href="#contact" className="flex items-center gap-2">
                      Más Información <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-4 md:p-8 aspect-square flex items-center justify-center border border-white/10 shadow-inner">
                  <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-primary/10 w-full h-full flex flex-col items-center justify-center text-center space-y-6 transform hover:rotate-2 transition-transform duration-500">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                      <Search className="w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl text-foreground">Búsqueda Inteligente</h4>
                      <p className="text-muted-foreground mt-2">Encuentra exactamente lo que buscas en segundos.</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-primary animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Decoración extra */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
