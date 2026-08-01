export default function Schedule() {
  return (
    <section className="py-20 px-6 text-center bg-primary select-none relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[#9c7449]">
          ⏰ Flight Itinerary
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-2 shadow-lg">
              <span className="text-2xl">🛫</span>
            </div>
            <p className="text-sm text-[#9c7449]/70">Arrival</p>
            <p className="font-serif text-xl text-[#9c7449]">Dec 27</p>
            <p className="font-serif text-lg text-[#9c7449]">2:00 PM</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-2 shadow-lg">
              <span className="text-2xl">🛩️</span>
            </div>
            <p className="text-sm text-[#9c7449]/70">Ceremony</p>
            <p className="font-serif text-xl text-[#9c7449]">Dec 27</p>
            <p className="font-serif text-lg text-[#9c7449]">3:00 PM</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-2 shadow-lg">
              <span className="text-2xl">🏨</span>
            </div>
            <p className="text-sm text-[#9c7449]/70">Reception</p>
            <p className="font-serif text-xl text-[#9c7449]">Dec 27</p>
            <p className="font-serif text-lg text-[#9c7449]">5:00 PM</p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-[#9c7449] font-light">
            <span className="font-semibold">Gate B</span> - Terminal A, <span className="font-semibold">Dec 27, 2026</span>
          </p>
          <p className="text-sm text-[#b3926a] mt-4 uppercase tracking-wider">
            Please arrive 30 minutes before departure
          </p>
        </div>
      </div>
    </section>
  );
}