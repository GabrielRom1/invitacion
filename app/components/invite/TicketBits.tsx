export function Cord({ color = "#efe5d8" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 80 110"
      className="pointer-events-none absolute left-1/2 -top-[68px] h-[76px] w-[58px] -translate-x-1/2 overflow-visible"
    >
      <path
        d="M 20 96 C 6 68, 6 18, 40 6 C 74 18, 74 68, 60 96"
        fill="none"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="40" cy="98" r="10.5" fill="none" stroke="#d8d8d8" strokeWidth="4.5" />
      <circle cx="40" cy="98" r="10.5" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
    </svg>
  );
}

export function Barcode({ className = "" }: { className?: string }) {
  const widths = [2, 1, 1, 3, 2, 1, 4, 1, 2, 1, 3, 1, 1, 2, 4, 1, 2, 3, 1, 1, 2, 1, 4, 2, 1, 3, 1, 2];
  return (
    <div className={`flex items-stretch gap-[2px] ${className}`}>
      {widths.map((w, i) => (
        <span key={i} className="bg-[#2B2E36]" style={{ width: `${w * 1.6}px` }} />
      ))}
    </div>
  );
}

export function Stars({ filled, color }: { filled: number; color: string }) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill={i < filled ? color : "none"}
          stroke={color}
          strokeWidth={1.4}
        >
          <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
        </svg>
      ))}
    </div>
  );
}

export function NoPhoneIcon({ color, size = 40 }: { color: string; size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} fill="none" stroke={color} strokeWidth="3.2">
      <rect x="15" y="5" width="18" height="38" rx="3.5" />
      <line x1="15" y1="34" x2="33" y2="34" />
      <line x1="7" y1="7" x2="41" y2="41" />
    </svg>
  );
}