import Countdown from "./Countdown"; // Asegúrate de ajustar la ruta correcta de importación

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de Fondo (Nota: En Vite/Next.js lo ideal es usar "/assets/carousel-1.jpg" directamente) */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        // src="/assets/love-story/Z61_9408.jpg"
        src="https://res.cloudinary.com/dfgyyb9wl/image/upload/v1785197768/Z61_9408_o9trfs.jpg"
        alt="Fondo de portada"
      />

      {/* Capa oscura superpuesta */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white flex flex-col items-center px-4 w-full max-w-2xl">
        <p className="tracking-[0.4em] uppercase text-xs md:text-sm mb-4 opacity-90">
          Nos casamos
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wide leading-tight">
          Gabriel <span className="italic text-3xl md:text-4xl block my-1">&</span> Gabriela
        </h1>

        {/* EL COUNTDOWN INSTALADO AQUÍ: Con estilos integrados transparentes para la foto */}
        <div className="w-full mt-6">
          <Countdown targetDate="2026-12-27T15:00:00" />
        </div>

        <p className="mt-8 text-sm md:text-lg tracking-[0.3em] uppercase opacity-90 font-light border-t border-white/20 pt-4 w-48">
          27 . 12 . 2026
        </p>
      </div>
    </section>
  );
}