"use client";

import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoLight from "@/assets/image/logo_sivca.png";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Logo + descripción - 4 columnas */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
              <Image
                src={logoLight}
                alt="SIVCA Logo"
                width={100}
                height={100}
                className="object-contain h-24 w-auto brightness-110 shadow-2xl"
              />
            </Link>
            <p className="text-xl font-medium text-white/50 max-w-sm leading-relaxed">
              Elevando los estándares de la industria nacional con soluciones integrales de <span className="text-white">Excelencia y Calidad.</span>
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://www.instagram.com/sivcavenezuela/", icon: Instagram },
                { href: "https://twitter.com/", icon: Twitter },
                { href: "https://linkedin.com/", icon: Linkedin },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navegación - 3 columnas */}
          <div className="lg:col-span-3">
            <h4 className="font-headline text-lg font-black uppercase tracking-[0.2em] text-primary mb-8">
              Ecosistema
            </h4>
            <ul className="space-y-4">
              {[
                { href: "#about", label: "Corporativo" },
                { href: "#services", label: "Servicios Especializados" },
                { href: "https://catalogo.sivca.com.ve", label: "Catálogo Técnico" },
                { href: "#case-studies", label: "Proyectos de Éxito" },
                { href: "#contact", label: "Atención al Cliente" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors font-medium"
                  >
                    <ChevronRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto - 4 columnas */}
          <div className="lg:col-span-4 lg:text-right flex flex-col items-start lg:items-end">
            <h4 className="font-headline text-lg font-black uppercase tracking-[0.2em] text-primary mb-8">
              Conexión Directa
            </h4>
            <ul className="space-y-6">
              <li className="flex lg:flex-row-reverse items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:admin.sivca@gmail.com" className="text-white/60 hover:text-white font-medium transition-colors">
                  admin.sivca@gmail.com
                </a>
              </li>
              <li className="flex lg:flex-row-reverse items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+584121259744" className="text-white/60 hover:text-white font-medium transition-colors">
                  +58 (412) 125-9744
                </a>
              </li>
              <li className="flex lg:flex-row-reverse items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-white/60 font-medium max-w-[200px]">
                  Coro, Estado Falcón <br />
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Venezuela</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
            &copy; {currentYear} SIVCA. Vanguardia Industrial.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.1em] text-white/20">
            <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

