import { Clock } from "lucide-react";


export function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden"
    >
    
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Título con animación */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary relative inline-block">
            Conoce nuestros <span className="text-accent">HORARIOS</span>
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-accent animate-pulse"></span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Disponibles para atenderte con calidad y compromiso.
          </p>
        </div>

        {/* Tarjetas de horarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Lunes a Viernes */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 border-t-4 border-primary">
            <Clock className="w-14 h-14 mx-auto mb-6 text-primary group-hover:text-accent animate-bounce transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Lunes a Viernes
            </h3>
            <p className="text-lg text-muted-foreground font-medium">
              Sabemos Cuando Entramos  - PSabemos Cuando Entramos  - Pero Más Importante A Qué Hora Salimos?
            </p>
          </div>

          {/* Sábados, Domingos y Feriados */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 border-t-4 border-accent">
            <Clock className="w-14 h-14 mx-auto mb-6 text-accent group-hover:text-primary animate-pulse transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-accent mb-4">
              Sábados, Domingos y Feriados
            </h3>
            <p className="text-lg text-muted-foreground font-medium">Cerrado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
