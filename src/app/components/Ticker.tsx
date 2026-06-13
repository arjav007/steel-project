export function Ticker() {
  const items = [
    "SS & MS PIPELINE FABRICATION",
    "STRUCTURAL STEEL ERECTION",
    "TANK FABRICATION 20KL–1500KL",
    "HEAVY EQUIPMENT ERECTION",
    "LABOUR SUPPLY & MANPOWER",
    "PLANT COMMISSIONING",
    "OSHA-COMPLIANT SAFETY"
  ];

  const tickerContent = [...items, ...items].join(" // ");

  return (
    <div className="w-full overflow-hidden bg-[var(--rust)] py-4">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block text-[13px] tracking-[0.2em] text-[var(--white)]" style={{ fontFamily: 'var(--font-fraunces)' }}>
          {tickerContent} // {tickerContent}
        </span>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
