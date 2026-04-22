import Image from "next/image";

export type PolaroidProps = {
  src: string;
  alt: string;
  caption?: string;
  time?: string;
  rotate?: number;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

/**
 * Polaroid-style photo card. Uses next/image for perf.
 * Design: warm flash photo, cream film frame, scribbled caption.
 * See design.md — images are "hangover end-credits" vibe.
 */
export function Polaroid({
  src,
  alt,
  caption,
  time,
  rotate = 0,
  width = 480,
  height = 480,
  priority = false,
  className = "",
}: PolaroidProps) {
  return (
    <figure
      className={`group relative inline-block select-none bg-[#f5f1e6] p-3 pb-10 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.05)_inset] transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:rotate-0 sm:p-4 sm:pb-14 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-black">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 85vw"
          className="h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(80% 80% at 50% 50%, transparent 60%, rgba(0,0,0,0.45) 100%)",
          }}
        />
      </div>
      {(caption || time) && (
        <figcaption className="absolute inset-x-4 bottom-2 flex items-end justify-between gap-3 sm:bottom-4">
          {caption ? (
            <span className="font-display text-[15px] font-extrabold lowercase tracking-tightest text-[#1a0f05] sm:text-[17px]">
              {caption}
            </span>
          ) : (
            <span />
          )}
          {time ? (
            <span className="pp-tabular font-display text-[12px] font-bold text-[#7a5a38] sm:text-[13px]">
              {time}
            </span>
          ) : null}
        </figcaption>
      )}
    </figure>
  );
}
