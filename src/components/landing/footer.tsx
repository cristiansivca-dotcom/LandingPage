"use client";
import Link from 'next/link';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logoSivca from "@/assets/image/logo_sivca.png";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  
  const darkLogoUrl = logoSivca;
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
              <Image src={darkLogoUrl} alt="SIVCA Logo" width={50} height={60} className="object-contain h-20 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 max-w-xs">
              Servicios Integrales de Venezuela C.A. - Impulsando marcas hacia el éxito.
            </p>
          </div>
          <div className="flex flex-col items-center">
             <h4 className="font-semibold text-lg mb-4 font-headline">Navegación</h4>
             <ul className="space-y-2">
                <li><Link href="#about" className="hover:text-accent transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="#services" className="hover:text-accent transition-colors">Servicios</Link></li>
                <li><Link href="#case-studies" className="hover:text-accent transition-colors">Casos de Éxito</Link></li>
                <li><Link href="#contact" className="hover:text-accent transition-colors">Contacto</Link></li>
             </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-lg mb-4 font-headline">Síguenos</h4>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/sivcavenezuela/" aria-label="Instagram" className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} SIVCA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
