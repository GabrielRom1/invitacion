import { Clock3, Heart, Plane, WineOff } from "lucide-react";
import Ticket from "./Ticket";
import LuggageTag from "./LuggageTag";
import { NoPhoneIcon } from "./TicketBits";

const COLORS = {
  blue: "#c5a46d",
  tan: "#c5a46d",
  green: "#c5a46d",
};

export default function Venue() {
  return (
    <section className="select-none bg-secondary px-4 py-10 sm:px-10 md:px-16 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <Ticket />
        </div>

        <div className="order-1 flex flex-col items-center justify-center lg:order-2">
          <div className="mb-10 text-center text-white">
            {/* <Plane size={18} className="mx-auto mb-2 rotate-45 opacity-80" /> */}
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-white/40" />
              <h3 className="text-sm font-light tracking-[0.35em]">DETALLES IMPORTANTES</h3>
              <span className="h-px w-10 bg-white/40" />
            </div>
          </div>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <LuggageTag
              color={COLORS.blue}
              icon={<Clock3 size={38} color={COLORS.blue} strokeWidth={1.6} />}
              title={<>Lleguen<br />Temprano</>}
              description="Les pedimos puntualidad para disfrutar cada momento especial desde el primer segundo."
              filledStars={5}
            />
            {/* <LuggageTag
              color={COLORS.tan}
              icon={<Heart size={38} color={COLORS.tan} strokeWidth={1.6} />}
              title={<>Celebración<br />sin Alcohol</>}
              description="Agradecemos su amor y apoyo en esta decisión. Será un ambiente completamente familiar y lleno de bendición."
              filledStars={1}
            /> */}
            
            <LuggageTag
              color={COLORS.tan}
              icon={<WineOff size={38} color={COLORS.tan} strokeWidth={1.6} />}
              title={<>Celebración<br />sin Alcohol</>}
              description="Agradecemos su amor y apoyo en esta decisión. Será un ambiente completamente familiar y lleno de bendición."
              filledStars={1}
            />

            
            <LuggageTag
              color={COLORS.green}
              icon={<NoPhoneIcon color={COLORS.green} size={38}  />}
              title={<>Boda<br />Desconectada</>}
              description="Sin teléfonos en la ceremonia. Queremos ver sus rostros y compartir su presencia con ustedes."
              filledStars={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}