export default function Divider() {
  return (
	<>
		<div className="w-full bg-[#fbf8f3] py-5 flex items-center justify-center gap-4 select-none px-8 md:px-16">
			{/* Línea izquierda (flex-grow hace que se estire todo lo posible) */}
			<div className="h-[1px] flex-grow bg-[#875e33]/40" />
			
			{/* Rombo Central */}
			<div className="w-2 h-2 rotate-45 bg-[#875e33] shrink-0 shadow-[0_0_8px_rgba(135,94,51,0.5)]" />
			
			{/* Línea derecha (flex-grow hace que se estire todo lo posible) */}
			<div className="h-[1px] flex-grow bg-[#875e33]/40" />
		</div>
	</>
  );
}