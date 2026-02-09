"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import Image from 'next/image';
import logoSivca from "@/assets/image/logo_sivca.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Estructura", href: "#org" },
    { name: "Equipo", href: "#team" },
    { name: "Servicios", href: "#services" },
    { name: "Catálogo", href: "https://catalogo.sivca.com.ve" },
    { name: "Alianza", href: "#partnerships" },
    //{ name: "Socios", href: "#partners" },
    { name: "Marcas", href: "#brands" },
    { name: "Casos de Éxito", href: "#case-studies" },
    //{ name: 'FAQ', href: '#faq' },
    { name: "Horario", href: "#schedule" },
  ];


  const darkLogoUrl = logoSivca;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-2 shadow-2xl'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <Image
            src={logoSivca}
            alt="SIVCA Logo"
            width={70}
            height={70}
            className={cn(
              "object-contain transition-all duration-500",
              isScrolled ? "h-12 w-auto" : "h-16 w-auto brightness-110 contrast-125"
            )}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'relative text-sm font-semibold tracking-wide uppercase transition-all duration-300 group',
                isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-white'
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                isScrolled ? "bg-primary" : "bg-white"
              )} />
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button
            asChild
            className={cn(
              "rounded-full px-8 transition-all duration-300 shadow-lg",
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20"
                : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-primary"
            )}
          >
            <Link href="#contact">Contáctanos</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? 'text-primary' : 'text-white')}>
                <Menu className="h-7 w-7" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-[400px] border-l border-white/10 bg-background/95 backdrop-blur-2xl px-8">
              <SheetTitle className="sr-only">Menú principal</SheetTitle>
              <div className="flex flex-col h-full py-10">
                <div className="flex justify-between items-center mb-12">
                  <Link href="/" className="transition-transform hover:scale-105">
                    <Image src={logoSivca} alt="SIVCA Logo" width={80} height={80} className="object-contain" />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="hover:bg-white/5">
                      <X className="h-7 w-7" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-2xl font-bold tracking-tight transition-colors hover:text-primary text-foreground"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto">
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full bg-primary text-primary-foreground rounded-xl text-lg h-16 shadow-xl">
                      <Link href="#contact">Hablemos ahora</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}