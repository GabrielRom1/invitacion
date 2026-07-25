export default function Story() {
  return (
    <section className="w-full bg-[#fbf8f3] py-20 px-6 sm:px-10 md:px-16 lg:px-24 select-none">
      {/* Contenedor principal: Cambia de columna (móvil) a fila (desktop) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto mb-20">
        
        {/* COLUMNA DE LA FOTO */}
        <div className="w-full md:w-1/2 shrink-0 overflow-hidden rounded-xl shadow-sm border border-[#e6ded2]/40">
          <img
            src="/assets/love-story/Z62_2423.jpg"
            alt="Nuestra historia"
            className="w-full h-64 sm:h-80 md:h-[400px] object-cover"
          />
        </div>

        {/* COLUMNA DE TEXTO */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[#9c7449] font-normal tracking-wide mb-6">
            Nuestra historia de amor
          </h2>
          
          <p className="font-sans text-base md:text-lg text-[#875e33]/90 leading-relaxed font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rerum 
            earum! Doloribus minima provident quibusdam nostrum, ea voluptates 
            vel fugiat. Nihil eaque exercitationem vero nostrum beatae aliquid 
            neque consequatur corporis? Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Minima reiciendis a fugit adipisci est saepe 
            consequatur ullam harum ipsam quisquam odit maxime.
          </p>
        </div>
      </div>

      {/* BLOQUE DEL VERSÍCULO BÍBLICO TOTALMENTE PULIDO */}
      <div className="max-w-2xl mx-auto text-center mt-16 border-t border-[#e6ded2]/40 pt-12">
        <p className="font-serif italic text-2xl md:text-3xl text-[#875e33] leading-relaxed">
          «El amor todo lo sufre, todo lo cree, <br className="hidden sm:inline" /> todo lo espera, todo lo soporta.»
        </p>
        
        <h3 className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-[#b3926a] font-semibold mt-6">
          1 Corintios 13:7
        </h3>
      </div>
    
    </section>
  );
}