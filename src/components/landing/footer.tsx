"use client";
import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoLight from "@/assets/image/logo_sivca.png"; // versión clara


export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/20">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Logo + descripción */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" aria-label="Inicio">
              <Image
                src={logoLight}
                alt="SIVCA Logo"
                width={70}
                height={80}
                className="object-contain h-20 w-auto dark:hidden"
              />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 max-w-xs leading-relaxed">
              Servicios Integrales de Venezuela C.A. <br />
              Excelencia y Calidad de Servicios.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#about", label: "Sobre Nosotros" },
                { href: "#services", label: "Servicios" },
                { href: "#case-studies", label: "Casos de Éxito" },
                { href: "#contact", label: "Contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wide">
              Contáctanos
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@sivca.com" className="hover:text-accent">
                  info@sivca.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+582123456789" className="hover:text-accent">
                  +58 212-3456789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Caracas, Venezuela</span>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wide">
              Síguenos
            </h4>
            <div className="flex gap-4">
              {[
                {
                  href: "https://www.instagram.com/sivcavenezuela/",
                  icon: <Instagram size={20} />,
                  label: "Instagram",
                },
                {
                  href: "https://twitter.com/",
                  icon: <Twitter size={20} />,
                  label: "Twitter",
                },
                {
                  href: "https://linkedin.com/",
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60">
          <p>&copy; {currentYear} SIVCA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
