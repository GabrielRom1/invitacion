export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="../../../public/assets/carousel-1.jpg"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center text-white">
        <p className="tracking-[0.4em] uppercase text-sm mb-4">
          Nos casamos
        </p>

        <h1 className="text-6xl md:text-8xl font-serif">
          Gabriel <br />
          <span className="italic text-3xl md:text-4xl">&</span> <br />
          Gabriela
        </h1>

        <p className="mt-6 text-lg tracking-widest">
          27 de Diciembre de 2026
        </p>
      </div>
    </section>
  );
}