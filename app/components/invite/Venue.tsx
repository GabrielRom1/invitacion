export default function Venue() {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#c5a46d] text-white select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Contenedor principal: Cambia la dirección del flujo según la pantalla */}
        {/* En móvil/tablet: Columna inversa (detalles arriba, mapa abajo). En lg: Fila normal */}
        <div className="flex flex-col-reverse lg:flex-row items-stretch justify-center gap-12 lg:gap-16">
          
          {/* BLOQUE DEL LUGAR (Izquierda en lg, Abajo en móvil) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center">
            <h2 className="font-serif italic text-4xl md:text-5xl tracking-wide mb-4">
              El Lugar
            </h2>
            <p className="font-sans text-lg uppercase tracking-[0.2em] font-light mb-8 opacity-90">
              Hacienda Bendecida
            </p>
            
            <div className="w-full overflow-hidden rounded-xl shadow-lg border border-white/10 bg-white/5">
              <iframe
                className="w-full h-72 md:h-80 border-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.5267674502606!2d-65.9223076!3d18.2775031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c035fa6f21bc74f%3A0xed9d256ee10f6a64!2sHacienda%20Bendecida!5e0!3m2!1ses!2sus!4v1782011568714!5m2!1ses!2sus"
                title="Mapa de ubicación"
              />
            </div>
          </div>

          {/* COLUMNA DE DETALLES IMPORTANTES (Derecha en lg, Arriba en móvil) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-l border-white/20 pb-10 lg:pb-0 lg:pl-12">
            <h3 className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-white/80 mb-6 lg:mb-8">
              Detalles Importantes
            </h3>
            
            <div className="grid gap-4 md:grid-cols-3 lg:max-w-[42rem] w-full items-stretch justify-center mx-auto">
              <article className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-5 text-center shadow-sm min-h-[280px] w-full max-w-[220px] h-full mx-auto">
                <h4 className="font-serif italic text-[1.6rem] leading-tight mb-2 min-h-[3rem]">
                  Lleguen Temprano
                </h4>
                <p className="font-sans text-sm md:text-base font-light text-white/90 leading-relaxed">
                  Les pedimos puntualidad para disfrutar cada momento especial desde el primer segundo.
                </p>
              </article>

              <article className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-5 text-center shadow-sm min-h-[280px] w-full max-w-[220px] h-full mx-auto">
                <h4 className="font-serif italic text-[1.6rem] leading-tight mb-2 min-h-[3rem]">
                  Celebración sin Alcohol
                </h4>
                <p className="font-sans text-sm md:text-base font-light text-white/90 leading-relaxed">
                  Agradecemos su amor y apoyo en esta decisión. Será un ambiente completamente familiar y lleno de bendición.
                </p>
              </article>

              <article className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-5 text-center shadow-sm min-h-[280px] w-full max-w-[220px] h-full mx-auto">
                <h4 className="font-serif italic text-[1.6rem] leading-tight mb-2 min-h-[3rem]">
                  Boda Desconectada
                </h4>
                <p className="font-sans text-sm md:text-base font-light text-white/90 leading-relaxed">
                  Sin teléfonos en la ceremonia. Queremos ver sus rostros y compartir su presencia con ustedes.
                </p>
              </article>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}