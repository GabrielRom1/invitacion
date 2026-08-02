export default function DressCode() {
  return (
    <section className="animate-fadeIn py-10 px-6 text-center bg-[#FFEAE5] text-[#9c7449] select-none transition-opacity duration-700 ease-in-out">
      <div className="max-w-5xl mx-auto grid gap-6 items-center md:grid-cols-[1.05fr_1fr]">
        <div className="max-w-md mx-auto w-full flex flex-col justify-center">
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#9c7449] tracking-wide mb-3 ">
            Código de Vestimenta
          </h2>
                   <p className="font-sans text-lg uppercase tracking-[0.2em] font-medium text-[#9c7449] mb-6">
              Semi Formal
            </p>
            

          <div className="mb-6 flex flex-col items-center justify-center gap-4">
            
            <img 
              src="/assets/ropa2.png" 
              alt="Vestimenta formal" 
              className="w-auto h-60 object-contain opacity-90 drop-shadow-sm"
            />
     
            <p className="font-serif text-lg italic text-[#9c7449]/85">
              Recomendamos utilizar tonos como
            </p>

            <div className="flex flex-wrap items-end justify-center gap-3">
              <div className="h-14 w-14 rounded-t-full rounded-b-[30px] bg-[#9caf88]" />
              <div className="h-14 w-14 rounded-t-full rounded-b-[30px] bg-[#00381f]" />
              <div className="h-14 w-14 rounded-t-full rounded-b-[30px] bg-[#000000cc]" />
              <div className="h-14 w-14 rounded-t-full rounded-b-[30px] bg-[#741717]" />
              <div className="h-14 w-14 rounded-t-full rounded-b-[30px] bg-[#b27361]" />
            </div>
          </div>

          <div className="mb-10">
 

            <p className="font-bold mt-4 font-sans text-xs uppercase tracking-[0.22em] text-[#9c7449]/75">
            Agradecemos asistir vistiendo semi formal. 
              <span className=""> 
                Nos reservamos el uso del color blanco, rosa, azul y dorado.
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://pin.it/14Ec6NfuT" 
              target="_blank" 
              rel="noopener noreferrer"
              // className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm uppercase tracking-[0.25em] text-[#9c7449] shadow-md transition-all duration-300 hover:text-white hover:bg-[#9c7449] hover:scale-105 active:scale-95"
                    className="inline-flex items-center justify-center rounded-full bg-[#9c7449] px-8 py-3.5 font-sans text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-105 hover:bg-[#9c7449] active:scale-95 shadow-md font-semibold cursor-pointer text-center"

              // className="inline-flex items-center justify-center rounded-full border border-[#9c7449]/50 bg-white px-8 py-3 font-sans text-xs uppercase tracking-[0.25em] text-[#9c7449] transition-all duration-300 hover:bg-[#9c7449] hover:text-white hover:border-[#9c7449] hover:scale-105 active:scale-95 cursor-pointer shadow-sm font-medium"
            >
              Ver inspiración aquí
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-lg border border-[#e6ded2]/40 bg-white/35 md:h-[480px] md:max-w-[360px] md:justify-self-end">
          <img
            src="/assets/love-story/Z62_2625.jpg"
            alt="Foto de nuestra historia"
            className="h-full w-full object-cover object-center aspect-[5/6] md:aspect-[5/5]"
          />
        </div>
      </div>
    </section>
  );
}