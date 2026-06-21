import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string | Date; // Recibe la fecha objetivo, ej: "2026-12-27T18:00:00"
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeftData = { days: 0, hours: 0, minutes: 0 };

      if (difference > 0) {
        timeLeftData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        };
      }
      
      setTimeLeft(timeLeftData);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Actualiza cada minuto ya que no mostramos segundos

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="py-12 text-center select-none bg-[#fbf8f3] text-[#875e33] px-2 relative overflow-hidden">
      {/* Detalles florales o texturas de fondo opcionales si usas imágenes de esquina en tu proyecto */}
      
      {/* Bloque de Títulos */}
      <div className="mb-14">
        <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-[#9c7449] font-normal tracking-wide mb-4">
          Cuenta Atrás
        </h2>
        <p className="font-serif text-sm md:text-base uppercase tracking-[0.25em] text-[#b3926a] font-medium">
          Hasta el 27 de diciembre de 2026
        </p>
      </div>
      
      {/* Contenedor del Marcador */}
      <div className="flex justify-center items-center max-w-xl mx-auto">
        
        {/* Días */}
        <div className="flex-1 px-4 text-center">
          <p className="font-serif italic font-light text-4xl md:text-6xl text-[#875e33]">
            {formatNumber(timeLeft.days)}
          </p>
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] block mt-4 text-[#b3926a] font-medium">
            Días
          </span>
        </div>

        {/* Línea Divisoria Fina */}
        <div className="h-14 w-[1px] bg-[#e6ded2]" />

        {/* Horas */}
        <div className="flex-1 px-4 text-center">
          <p className="font-serif italic font-light text-4xl md:text-6xl text-[#875e33]">
            {formatNumber(timeLeft.hours)}
          </p>
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] block mt-4 text-[#b3926a] font-medium">
            Horas
          </span>
        </div>

        {/* Línea Divisoria Fina */}
        <div className="h-14 w-[1px] bg-[#e6ded2]" />

        {/* Minutos */}
        <div className="flex-1 px-4 text-center">
          <p className="font-serif italic font-light text-4xl md:text-6xl text-[#875e33]">
            {formatNumber(timeLeft.minutes)}
          </p>
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] block mt-4 text-[#b3926a] font-medium">
            Minutos
          </span>
        </div>

      </div>
    </section>
  );
}