export default function RSVP() {
  return (
    <section className="w-full bg-[#c5a46d] py-10 px-6">
      <div className="mx-auto max-w-3xl rounded-[2rem] px-6 py-12 text-center text-white sm:px-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
          Confirmar Asistencia
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto">
          Estamos emocionados de compartir este día contigo. Por favor, confirma tu asistencia usando el formulario.
        </p>

        <a
          href="https://forms.gle/tu-formulario"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm uppercase tracking-[0.25em] text-[#c5a46d] shadow-md transition-all duration-300 hover:bg-[#f6e7c9] hover:scale-105 active:scale-95"
        >
          Confirmar Asistencia
        </a>
      </div>
    </section>
  );
}