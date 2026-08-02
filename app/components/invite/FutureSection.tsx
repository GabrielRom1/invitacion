import { useRef } from "react";
import TicketFuture from "./TicketFuture";

export default function FutureSection() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
    <section className="w-full bg-secondary text-[#4B5364] py-6 px-6 sm:px-12 md:px-16 select-none font-sans">
      <div className="max-w-6xl mx-auto grid gap-6 items-stretch md:grid-cols-[1fr_1.05fr]">
        <div className="overflow-hidden rounded-[2rem] shadow-lg border border-white/50 bg-white/35 md:h-[425px]">
          <img
            src="/assets/love-story/Z62_2463.jpg"
            alt="Detalle de nuestra historia"
            className="h-full w-full object-cover"
          />
        </div>

        <TicketFuture onOpenModal={openModal} />
      </div>
    </section>

    <dialog
      ref={modalRef}
      className="fixed inset-0 z-50 mx-auto my-auto h-fit w-[92vw] max-w-md rounded-2xl border-none bg-transparent p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:flex-col open:items-center open:justify-center"
    >
      <div className="bg-[#F6F1E7] text-[#9c7449] w-full p-6 sm:p-8 rounded-2xl border border-[#e6ded2] relative">
        <h3 className="font-serif italic text-2xl sm:text-3xl text-[#9c7449] mb-4 text-center">
          Información de Regalos
        </h3>

        <p className="text-xs sm:text-sm font-light text-[#9c7449]/80 mb-6 text-center leading-relaxed">
          Pueden realizar su muestra de cariño a través de ATH Móvil (Sección de Transferir) a cualquiera de los siguientes números:
        </p>

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

        <div className="mt-6 sm:mt-8 flex justify-center">
          <form method="dialog">
            <button className="rounded-full bg-[#9c7449] text-white px-8 py-2.5 text-xs uppercase tracking-widest hover:bg-[#9c7449] transition-all duration-300 shadow-sm font-medium cursor-pointer active:scale-95">
              Entendido
            </button>
          </form>
        </div>
      </div>

      <form method="dialog" className="fixed inset-0 -z-10 cursor-pointer">
        <button className="w-full h-full bg-transparent opacity-0 outline-none">Cerrar</button>
      </form>
    </dialog>
    </>
  );
}
