import { Plane } from "lucide-react";
import { Cord, Barcode, Stars } from "./TicketBits";

interface Props {
  color: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  filledStars: number;
}

export default function LuggageTag({ color, icon, title, description, filledStars }: Props) {
  return (
    <article className="relative">

      <div
        className="overflow-hidden bg-[#F6F1E7] shadow-2xl"
        style={{
          borderRadius: "18px 18px 18px 18px",
        }}
      >
        <div className="pt-8 pb-5 text-center text-white" style={{ background: color }}>
          <h4 className="font-serif text-[27px] italic leading-tight">{title}</h4>
        </div>

        <div className="relative flex justify-center py-3">
          <div className="absolute left-6 right-6 top-1/2 border-t border-dashed border-stone-400/60" />
          <Plane size={16} className="relative rotate-45 bg-[#F6F1E7] px-1" color={color} />
        </div>

        <div className="flex justify-center py-2">{icon}</div>

        <p className="px-6 pt-4 text-center text-[14px] leading-6 text-neutral-700">
          {description}
        </p>

        <div className="flex justify-center pt-5">
          {/* <Stars filled={filledStars} color={color} /> */}
        </div>

        <div className="flex justify-center px-6 pb-6 pt-3">
          {/* <Barcode className="h-8" /> */}
        </div>
      </div>
    </article>
  );
}