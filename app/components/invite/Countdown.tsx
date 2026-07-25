import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string | Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

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
    const timer = setInterval(calculateTimeLeft, 60000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="w-full select-none text-white py-4 max-w-md mx-auto">
      {/* Contenedor del Marcador */}
      <div className="flex justify-center items-center">
        
        {/* Días */}
        <div className="flex-1 text-center">
          <p className="font-serif italic font-light text-4xl md:text-5xl text-white drop-shadow-sm">
            {formatNumber(timeLeft.days)}
          </p>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] block mt-2 text-white/70 font-light">
            Días
          </span>
        </div>

        {/* Línea Divisoria Fina Translúcida */}
        <div className="h-8 w-[1px] bg-white/20" />

        {/* Horas */}
        <div className="flex-1 text-center">
          <p className="font-serif italic font-light text-4xl md:text-5xl text-white drop-shadow-sm">
            {formatNumber(timeLeft.hours)}
          </p>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] block mt-2 text-white/70 font-light">
            Horas
          </span>
        </div>

        {/* Línea Divisoria Fina Translúcida */}
        <div className="h-8 w-[1px] bg-white/20" />

        {/* Minutos */}
        <div className="flex-1 text-center">
          <p className="font-serif italic font-light text-4xl md:text-5xl text-white drop-shadow-sm">
            {formatNumber(timeLeft.minutes)}
          </p>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] block mt-2 text-white/70 font-light">
            Minutos
          </span>
        </div>

      </div>
    </div>
  );
}