import { Plane } from "lucide-react";

interface TicketFutureProps {
  onOpenModal: () => void;
}

export default function TicketFuture({ onOpenModal }: TicketFutureProps) {
  return (
    <div className="overflow-hidden rounded-[28px] shadow-2xl ">
      <div className="flex min-h-[425px]">
        <div className="relative flex w-[68px] shrink-0 flex-col items-center justify-between bg-[#c5a46d] py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50">
            <Plane size={17} className="text-white" strokeWidth={1.6} />
          </div>

          <div className="flex items-center gap-2 py-6">
            <span
              className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.3em] text-white"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Nuestro futuro
            </span>
          </div>

          <span className="h-16 flex-col [&>span]:h-full [&>span]:w-full"></span>
        </div>

        <div className="relative flex-1 bg-[#F6F1E7] px-8 py-7">
          <h3 className="font-serif text-4xl italic text-[#9c7449] tracking-wide md:text-5xl">
            Ayúdanos a construir nuestro futuro
          </h3>

          <div className="mt-5 space-y-4 font-light text-sm leading-relaxed text-[#9c7449] md:text-base">
            <p>
              Su presencia en nuestra boda es el mayor regalo que podríamos recibir. Sin embargo,
              si desean bendecirnos con un detalle para nuestra nueva etapa juntos,
              agradeceremos enormemente su muestra de cariño.
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#9c7449] md:text-sm">
              Presiona abajo para ver la información de ATH Móvil:
            </p>
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <button
              onClick={onOpenModal}
                    className="inline-flex items-center justify-center rounded-full bg-[#9c7449] px-8 py-3.5 font-sans text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-105 hover:bg-[#9c7449] active:scale-95 shadow-md font-semibold cursor-pointer text-center"

              // className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#4B5364]/40 bg-transparent px-8 py-2.5 font-sans text-xs uppercase tracking-[0.2em] font-medium text-neutral-700 transition-all duration-300 hover:scale-105 hover:bg-[#9c7449] hover:text-white active:scale-95"
            >
              Ver Datos de Transferencia
            </button>
                          
          </div>
        </div>
      </div>
    </div>
  );
}
