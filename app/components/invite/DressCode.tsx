export default function DressCode() {
  return (
    <section className="py-20 px-6 text-center bg-[#fbf8f3] text-[#875e33] select-none">
      <div className="max-w-md mx-auto">
        
        {/* TÍTULO PRINCIPAL */}
        <h2 className="font-serif italic text-4xl md:text-5xl text-[#9c7449] tracking-wide mb-6">
          Código de Vestimenta
        </h2>

        {/* CONTENEDOR DE LA IMAGEN / ICONO */}
        {/* Añadimos un sutil filtro o fondo si tu imagen es transparente */}
        <div className="flex justify-center mb-6">
          <img 
            src="/assets/check.png" 
            alt="Vestimenta formal" 
            className="w-auto h-28 object-contain opacity-90 drop-shadow-sm"
          />
        </div>

        {/* DESCRIPCIÓN */}
        <div className="mb-10">
          <p className="font-sans text-lg uppercase tracking-[0.2em] font-medium text-[#875e33]">
            Semi Formal
          </p>
          <p className="font-sans text-sm font-light text-[#875e33]/70 mt-2 leading-relaxed">
            Agradecemos asistir vistiendo trajes formales. <br />
            Nos reservamos el uso del color blanco, rosa, azul y dorado.
          </p>
        </div>

        {/* BOTÓN DE INSPIRACIÓN DE PINTEREST */}
        <div className="flex justify-center">
          <a 
            href="https://www.pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#875e33]/50 bg-transparent px-8 py-3 font-sans text-xs uppercase tracking-[0.25em] text-[#875e33] transition-all duration-300 hover:bg-[#875e33] hover:text-white hover:border-[#875e33] hover:scale-105 active:scale-95 cursor-pointer shadow-sm font-medium"
          >
            Ver inspiración aquí
          </a>
        </div>

      </div>
    </section>
  );
}