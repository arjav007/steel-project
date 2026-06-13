interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
  src?: string;
}

export function ImagePlaceholder({ label, className = "", aspectRatio = "16/9", src }: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={`relative bg-[var(--ink-2)] overflow-hidden ${className}`}
        style={{ aspectRatio }}
      >
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,13,16,0.4)] to-transparent"></div>
      </div>
    );
  }

  return (
    <div
      className={`relative bg-[var(--ink-2)] overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="crosshatch" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <line x1="0" y1="24" x2="24" y2="0" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crosshatch)" />
      </svg>

      <div className="absolute inset-4 border border-dashed opacity-30" style={{ borderColor: 'var(--rust)' }}></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[10px] tracking-[0.2em] text-center opacity-60" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>
          {label.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
