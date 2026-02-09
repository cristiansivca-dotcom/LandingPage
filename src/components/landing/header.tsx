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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-card shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Image src={darkLogoUrl} alt="SIVCA Logo" width={80} height={70} className="object-contain h-20 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Contáctanos</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? 'text-primary' : 'text-primary-foreground')}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-card">
              <SheetTitle className="sr-only">Menú principal</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                  <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
                    <Image src={darkLogoUrl} alt="SIVCA Logo" width={90} height={60} className="object-contain h-20 w-auto" />
                  </Link>
                  {/* Solo este botón "X" para cerrar */}
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Cerrar menú</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col items-center gap-8 mt-16 flex-grow">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-2xl font-medium transition-colors hover:text-primary text-foreground"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-8">
                    <Link href="#contact">Contáctanos</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}