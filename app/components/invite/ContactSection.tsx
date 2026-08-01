export default function ContactSection() {
  return (
    <section className="w-full bg-[#c5a46d] text-white py-10 px-6 sm:px-12 md:px-16 select-none font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-serif italic text-4xl md:text-5xl text-white tracking-wide mb-4">
          Contactos
        </h3>
        <p className="font-light text-sm md:text-base text-white/80 mb-10">
          Para dudas o preguntas nos pueden contactar en cualquier momento.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16">
          <div className="flex items-center gap-4 group">
            <span className="font-serif italic text-xl tracking-wide text-white w-16 text-right">
              Novio
            </span>
            <div className="h-4 w-[1px] bg-white/50" />
            <a
              href="tel:7879401161"
              className="text-lg md:text-xl tracking-widest font-light hover:text-[#f6e7c9] transition-colors duration-300"
            >
              787-940-1161
            </a>
          </div>

          <div className="flex items-center gap-4 group">
            <span className="font-serif italic text-xl tracking-wide text-white w-16 text-right">
              Novia
            </span>
            <div className="h-4 w-[1px] bg-white/50" />
            <a
              href="tel:7872413090"
              className="text-lg md:text-xl tracking-widest font-light hover:text-[#f6e7c9] transition-colors duration-300"
            >
              787-241-3090
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
