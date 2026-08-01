import { Link } from "react-router";
import { QRCodeCanvas } from "qrcode.react";

export default function GalleryDigitalSection() {
  return (
    <section className="w-full bg-white text-[#9c7449] py-20 px-6 sm:px-12 md:px-16 select-none font-sans">
      <div className="max-w-3xl mx-auto text-center border-t border-[#e6ded2]/40 pt-20">
        <h3 className="font-serif italic text-4xl md:text-5xl text-[#9c7449] tracking-wide mb-4">
          Galería Digital
        </h3>
        <p className="max-w-xl mx-auto font-light text-sm md:text-base text-[#9c7449]/80 leading-relaxed mb-10">
          Queremos guardar cada instante de este día. Durante el evento, podrán subir todas las fotos y videos que tomen directamente aquí.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 bg-white p-8 rounded-2xl border border-[#e6ded2]/30 max-w-xl mx-auto shadow-sm">
          <div className="flex flex-col items-center">
            <Link
              to="https://www.google.com"
              className="inline-flex items-center justify-center rounded-full bg-[#9c7449] px-8 py-3.5 font-sans text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#9c7449] hover:scale-105 active:scale-95 shadow-md font-semibold cursor-pointer"
            >
              Acceder a la Galería
            </Link>
          </div>

          <div className="hidden md:block h-20 w-[1px] bg-[#e6ded2]" />
          <div className="block md:hidden w-20 h-[1px] bg-[#e6ded2]" />

          <div className="flex flex-col items-center gap-3">
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#9c7449] to-[#9c7449] shadow-lg border border-[#b3926a]/30 transform hover:scale-105 transition-all duration-300">
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
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-1 bg-[#b3926a]/50 rounded-full" />
                <div className="w-12 h-0.5 bg-[#b3926a]/30 mx-auto mt-0.5 rounded-full" />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-1 bg-[#b3926a]/50 rounded-full" />
                <div className="w-12 h-0.5 bg-[#b3926a]/30 mx-auto mt-0.5 rounded-full" />
              </div>
            </div>
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-[#b3926a] font-medium bg-gradient-to-r from-[#fbf8f3] via-[#f5f0e8] to-[#fbf8f3] px-4 py-1 rounded-full border border-[#b3926a]/20">
                ✈️ Escanea con tu celular
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
