import { Plane, MapPin } from "lucide-react";
import { Barcode } from "./TicketBits";

export default function Ticket() {
  return (
    <div className="overflow-hidden rounded-[28px] shadow-2xl">
      <div className="flex">
        {/* stub izquierdo */}
        <div className="relative flex w-[68px] shrink-0 flex-col items-center justify-between bg-[#c5a46d] py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50">
            <Plane size={17} className="text-white" strokeWidth={1.6} />
          </div>

          <div className="flex items-center gap-2 py-6">
            <span
              className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.3em] text-white"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              El Lugar
            </span>
            <span
              className="whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-white/70"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Hacienda Bendecida
            </span>
          </div>

          <span className="h-16 flex-col [&>span]:h-full [&>span]:w-full"></span>
          {/* <Barcode className="h-16 flex-col [&>span]:h-full [&>span]:w-full" /> */}
        </div>

        {/* cuerpo crema */}
        <div className="relative flex-1 bg-[#F6F1E7] px-8 py-7">
          {/* <div className="pointer-events-none absolute right-7 top-6 h-16 w-16 rounded-full border border-dashed border-[#2B2E36]/20" /> */}

          <h3 className="font-serif text-4xl italic text-[#2B2E36]">El Lugar</h3>
          {/* <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#2B2E36]/70">
            Hacienda Bendecida
          </p> */}

          <div className="relative my-5">
            <div className="border-t border-dashed border-[#2B2E36]/25" />
            {/* <span className="absolute -left-[41px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-secondary" /> */}
            {/* <span className="absolute -right-[41px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-secondary" /> */}
          </div>

          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-[#2B2E36]">
              <MapPin size={16} className="shrink-0 text-secondary" />
              Hacienda Bendecida, Carolina
            </div>
            <span className="shrink-0 text-sm font-bold text-[#C79A3B]">2:00 PM</span>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#2B2E36]/10">
            <iframe
              className="h-44 w-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.5267674502606!2d-65.9223076!3d18.2775031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c035fa6f21bc74f%3A0xed9d256ee10f6a64!2sHacienda%20Bendecida!5e0!3m2!1ses!2sus!4v1782011568714!5m2!1ses!2sus"
              title="Ubicación del destino"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}