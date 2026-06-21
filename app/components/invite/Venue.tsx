export default function Venue() {
  return (
    <section className="py-20 px-6 text-center bg-[#c5a46d] text-white">
      <h2 className="text-5xl font-serif mb-4">El Lugar</h2>

      <p className="mb-6">Hacienda Bendecida</p>

      <iframe
        className="w-full max-w-2xl mx-auto h-64 rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.5267674502606!2d-65.9223076!3d18.2775031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c035fa6f21bc74f%3A0xed9d256ee10f6a64!2sHacienda%20Bendecida!5e0!3m2!1ses!2sus!4v1782011568714!5m2!1ses!2sus"
      />
    </section>
  );
}