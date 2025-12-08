import type {Metadata} from 'next';
//import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: 'SIVCA - Servicios Integrales de Venezuela C.A.',
  description: 'Agencia de servicios integrales de publicidad, partner estratégico de Empresas Polar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@700;800&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
