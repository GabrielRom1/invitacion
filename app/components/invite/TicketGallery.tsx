import { Plane } from "lucide-react";
import { Link } from "react-router";
import { QRCodeCanvas } from "qrcode.react";

export default function TicketGallery() {
  return (
    <>
      <div className="overflow-hidden rounded-[28px] shadow-2xl">
        <div className="flex min-h-[250px]">
          <div className="relative flex w-[68px] shrink-0 flex-col items-center justify-between bg-[#c5a46d] py-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50">
              <Plane size={17} className="text-white" strokeWidth={1.6} />
            </div>

            <div className="flex items-center gap-2 py-6">
              <span
                className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.3em] text-white"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Galería Digital
              </span>
            </div>

            <span className="h-16 flex-col [&>span]:h-full [&>span]:w-full"></span>
          </div>

          <div className="relative flex-1 bg-[#F6F1E7] px-8 py-7">
            <h3 className="font-serif text-4xl italic text-[#9c7449] tracking-wide" >
              Galería Digital
            </h3>

            <div className="mt-5 space-y-4 font-light text-sm leading-relaxed text-neutral-700 md:text-base">
              <p className="mt-4 max-w-xl font-light text-sm leading-relaxed text-[#9c7449]/80 md:text-base">
                Queremos guardar cada instante de este día. Durante el evento, podrán subir todas las fotos y videos que tomen directamente aquí.
              </p>
              <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col items-center gap-4 md:items-start">
                  <Link
                    to="https://www.google.com"
                    className="inline-flex items-center justify-center rounded-full bg-[#9c7449] px-8 py-3.5 font-sans text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-105 hover:bg-[#9c7449] active:scale-95 shadow-md font-semibold cursor-pointer text-center"
                  >
                    Acceder a la Galería
                  </Link>

                  <p className="m-auto text-center text-xs uppercase tracking-[0.25em] text-[#9c7449]/75 " >
                    Escanea con tu celular
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#9c7449] to-[#9c7449] shadow-lg border border-[#b3926a]/30">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#b3926a]/30 rounded-tl-2xl" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#b3926a]/30 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#b3926a]/30 rounded-bl-2xl" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#b3926a]/30 rounded-br-2xl" />
                    <div className="p-2.5 rounded-xl bg-white backdrop-blur-sm">
                      <QRCodeCanvas
                        value="https://www.google.com"
                        size={120}
                        bgColor="#ffffff"
                        fgColor="#9c7449"
                        level="H"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
