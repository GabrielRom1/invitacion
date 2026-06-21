export default function RSVP() {
  return (
    <section className="py-20 px-6 max-w-xl mx-auto">
      <h2 className="text-5xl font-serif text-center mb-10">
        RSVP
      </h2>

      <form className="space-y-4">
        <input
          placeholder="Nombre"
          className="w-full p-3 border rounded"
        />

        <input
          placeholder="Email"
          className="w-full p-3 border rounded"
        />

        <button className="w-full bg-[#c5a46d] text-white py-3 rounded">
          Enviar
        </button>
      </form>
    </section>
  );
}