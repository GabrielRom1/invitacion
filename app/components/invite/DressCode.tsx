export default function DressCode() {
  return (
    <section className="py-20 px-6 text-center bg-[#FFEAE5] text-[#9c7449] select-none">
      <div className="max-w-5xl mx-auto grid gap-6 items-stretch md:grid-cols-[1.05fr_1fr]">
        <div className="max-w-md mx-auto w-full flex flex-col justify-center">
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#9c7449] tracking-wide mb-6">
            Código de Vestimenta
          </h2>

          <div className="flex justify-center mb-6">
            <img 
              src="/assets/check.png" 
              alt="Vestimenta formal" 
              className="w-auto h-28 object-contain opacity-90 drop-shadow-sm"
            />
          </div>

          <div className="mb-10">
            <p className="font-sans text-lg uppercase tracking-[0.2em] font-medium text-[#9c7449]">
              Semi Formal
            </p>
            <p className="font-sans text-sm font-light text-[#9c7449]/70 mt-2 leading-relaxed">
              Agradecemos asistir vistiendo trajes formales. <br />
              Nos reservamos el uso del color blanco, rosa, azul y dorado.
            </p>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://pin.it/14Ec6NfuT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm uppercase tracking-[0.25em] text-[#9c7449] shadow-md transition-all duration-300 hover:text-white hover:bg-[#9c7449] hover:scale-105 active:scale-95"

              // className="inline-flex items-center justify-center rounded-full border border-[#9c7449]/50 bg-white px-8 py-3 font-sans text-xs uppercase tracking-[0.25em] text-[#9c7449] transition-all duration-300 hover:bg-[#9c7449] hover:text-white hover:border-[#9c7449] hover:scale-105 active:scale-95 cursor-pointer shadow-sm font-medium"
            >
              Ver inspiración aquí
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-lg border border-[#e6ded2]/40 bg-white/35 md:h-[420px] md:max-w-[360px] md:justify-self-end">
          <img
            src="/assets/love-story/Z62_2625.jpg"
            alt="Foto de nuestra historia"
            className="h-full w-full object-cover object-center aspect-[3/4] md:aspect-[3/4]"
          />
        </div>
      </div>
    </section>
  );
}