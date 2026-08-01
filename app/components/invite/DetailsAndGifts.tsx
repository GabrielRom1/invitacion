import { Link } from "react-router"; // O de tu framework de ruteo (~/components...)
import { QRCodeCanvas } from "qrcode.react";

export default function DetailsAndGifts() {
  const openModal = () => {
    const modal = document.getElementById("ath_movil_modal") as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  return (
    <>
      <section className="w-full bg-primary text-[#9c7449] py-20 px-6 sm:px-12 md:px-16 select-none font-sans">
        <div className="max-w-3xl mx-auto space-y-24">
          
          {/* ================= SECCIÓN: CONTACTO ================= */}
          <div className="text-center">
            <h3 className="font-serif italic text-4xl md:text-5xl text-[#9c7449] tracking-wide mb-4">
              Contactos
            </h3>
            <p className="font-light text-sm md:text-base text-[#9c7449]/80 mb-10">
              Para dudas o preguntas nos pueden contactar en cualquier momento.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16">
              {/* Contacto Novio */}
              <div className="flex items-center gap-4 group">
                <span className="font-serif italic text-xl tracking-wide text-[#9c7449] w-16 text-right">
                  Novio
                </span>
                <div className="h-4 w-[1px] bg-[#e6ded2]" />
                <a 
                  href="tel:7879401161" 
                  className="text-lg md:text-xl tracking-widest font-light hover:text-[#9c7449] transition-colors duration-300"
                >
                  787-940-1161
                </a>
              </div>

              {/* Contacto Novia */}
              <div className="flex items-center gap-4 group">
                <span className="font-serif italic text-xl tracking-wide text-[#9c7449] w-16 text-right">
                  Novia
                </span>
                <div className="h-4 w-[1px] bg-[#e6ded2]" />
                <a 
                  href="tel:7872413090" 
                  className="text-lg md:text-xl tracking-widest font-light hover:text-[#9c7449] transition-colors duration-300"
                >
                  787-241-3090
                </a>
              </div>
            </div>
          </div>

          {/* ================= SECCIÓN: ATH MÓVIL / REGALOS ================= */}
          <div className="text-center max-w-2xl mx-auto ">
            <h3 className="font-serif italic text-4xl md:text-5xl text-[#9c7449] tracking-wide mb-6">
              Ayúdanos a construir nuestro futuro
            </h3>
            <div className="space-y-4 font-light text-sm md:text-base text-[#9c7449]/90 leading-relaxed balance">
              <p>
                Su presencia en nuestra boda es el mayor regalo que podríamos recibir. Sin embargo, si desean bendecirnos con un detalle para nuestra nueva etapa juntos, agradeceremos enormemente su muestra de cariño.
              </p>
              <p className="text-xs md:text-sm text-[#b3926a] tracking-wide uppercase font-medium mt-2">
                Presiona abajo para ver la información de ATH Móvil:
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={openModal}
                className="inline-flex items-center justify-center rounded-full border border-[#9c7449]/40 bg-transparent px-8 py-2.5 font-sans text-xs uppercase tracking-[0.2em] text-[#9c7449] transition-all duration-300 hover:bg-[#9c7449] hover:text-white hover:scale-105 active:scale-95 cursor-pointer font-medium"
              >
                Ver Datos de Transferencia??
              </button>
            </div>
          </div>

          {/* ================= SECCIÓN: GALERÍA DIGITAL ================= */}
          <div className="text-center border-t border-[#e6ded2]/40 pt-20">
            <h3 className="font-serif italic text-4xl md:text-5xl text-[#9c7449] tracking-wide mb-4">
              Galería Digital
            </h3>
            <p className="max-w-xl mx-auto font-light text-sm md:text-base text-[#9c7449]/80 leading-relaxed mb-10">
              Queremos guardar cada instante de este día. Durante el evento, podrán subir todas las fotos y videos que tomen directamente aquí.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 bg-white/40 p-8 rounded-2xl border border-[#e6ded2]/30 max-w-xl mx-auto shadow-sm">
              
              {/* Enlace Directo */}
              <div className="flex flex-col items-center">
                <Link 
                  to="https://www.google.com" 
                  className="inline-flex items-center justify-center rounded-full bg-[#9c7449] px-8 py-3.5 font-sans text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#9c7449] hover:scale-105 active:scale-95 shadow-md font-semibold cursor-pointer"
                >
                  Acceder a la Galería
                </Link>
              </div>

{/* Divisor Línea Fina */}
              <div className="hidden md:block h-20 w-[1px] bg-[#e6ded2]" />
              <div className="block md:hidden w-20 h-[1px] bg-[#e6ded2]" />

              {/* Boarding Pass Entry */}
              <div class="flex flex-col items-center gap-3">
                <div class="relative p-1 rounded-2xl bg-gradient-to-br from-[#9c7449] to-[#9c7449] shadow-lg border border-[#b3926a]/30 transform hover:scale-105 transition-all duration-300">
                  <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#b3926a]/30 rounded-tl-2xl"></div>
                  <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#b3926a]/30 rounded-tr-2xl"></div>
                  <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#b3926a]/30 rounded-bl-2xl"></div>
                  <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#b3926a]/30 rounded-br-2xl"></div>
                  <div class="p-2.5 rounded-xl bg-white backdrop-blur-sm">
                    <QRCodeCanvas
                      value="https://www.google.com" // Cambia por tu dominio real de producción
                      size={120}
                      bgColor="#ffffff"
                      fgColor="#9c7449"
                      level="H"
                    />
                  </div>
                  <div class="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div class="w-8 h-1 bg-[#b3926a]/50 rounded-full"></div>
                    <div class="w-12 h-0.5 bg-[#b3926a]/30 mx-auto mt-0.5 rounded-full"></div>
                  </div>
                  <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div class="w-8 h-1 bg-[#b3926a]/50 rounded-full"></div>
                    <div class="w-12 h-0.5 bg-[#b3926a]/30 mx-auto mt-0.5 rounded-full"></div>
                  </div>
                </div>
                <div class="relative">
                  <p class="text-xs uppercase tracking-widest text-[#b3926a] font-medium bg-gradient-to-r from-[#fbf8f3] via-[#f5f0e8] to-[#fbf8f3] px-4 py-1 rounded-full border border-[#b3926a]/20">
                    ✈️ Escanea con tu celular
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= MODAL DIALOG COMPORTAMIENTO NATIVO ================= */}
{/* ================= MODAL DIALOG COMPORTAMIENTO NATIVO REFORZADO ================= */}
<dialog 
  id="ath_movil_modal" 
  className="fixed inset-0 z-50 mx-auto my-auto h-fit w-[92vw] max-w-md rounded-2xl border-none bg-transparent p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:flex-col open:items-center open:justify-center animate-fade-in"
>
  {/* Caja de contenido */}
  <div className="bg-primary text-[#9c7449] w-full p-6 sm:p-8 rounded-2xl border border-[#e6ded2] relative">
    
    <h3 className="font-serif italic text-2xl sm:text-3xl text-[#9c7449] mb-4 text-center">
      Información de Regalos
    </h3>
    
    <p className="text-xs sm:text-sm font-light text-[#9c7449]/80 mb-6 text-center leading-relaxed">
      Pueden realizar su muestra de cariño a través de **ATH Móvil** (Sección de Transferir) a cualquiera de los siguientes números:
    </p>

    {/* Cuentas organizadas */}
    <div className="space-y-4 bg-white/60 p-4 sm:p-5 rounded-xl border border-[#e6ded2]/60">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 text-sm">
        <span className="font-medium tracking-wide text-center sm:text-left">Gabriel (Novio)</span>
        <span className="font-mono tracking-wider text-[#9c7449] bg-[#9c7449]/5 px-2.5 py-1 rounded-md text-center sm:text-right font-semibold">
          787-940-1161
        </span>
      </div>
      
      <div className="h-[1px] bg-[#e6ded2]/60" />
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 text-sm">
        <span className="font-medium tracking-wide text-center sm:text-left">Gabriela (Novia)</span>
        <span className="font-mono tracking-wider text-[#9c7449] bg-[#9c7449]/5 px-2.5 py-1 rounded-md text-center sm:text-right font-semibold">
          787-241-3090
        </span>
      </div>
    </div>

    {/* Botón de Cierre */}
    <div className="mt-6 sm:mt-8 flex justify-center">
      <form method="dialog">
        <button className="rounded-full bg-[#9c7449] text-white px-8 py-2.5 text-xs uppercase tracking-widest hover:bg-[#9c7449] transition-all duration-300 shadow-sm font-medium cursor-pointer active:scale-95">
          Entendido
        </button>
      </form>
    </div>
  </div>

  {/* Cierre al hacer click en el fondo translúcido fuera del cuadro */}
  <form method="dialog" className="fixed inset-0 -z-10 cursor-pointer">
    <button className="w-full h-full bg-transparent opacity-0 outline-none">Cerrar</button>
  </form>
</dialog>
    </>
  );
}