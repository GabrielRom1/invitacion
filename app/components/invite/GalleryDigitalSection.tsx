import TicketGallery from "./TicketGallery";

export default function GalleryDigitalSection() {
  return (
    <section className="w-full bg-primary text-[#9c7449] py-20 px-6 sm:px-12 md:px-16 select-none font-sans">
      <div className="mx-auto max-w-3xl border-t border-[#e6ded2]/40 pt-20">
        <TicketGallery />
      </div>
    </section>
  );
}
