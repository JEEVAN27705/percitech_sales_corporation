import { useRef, useEffect } from "react";

const brands = [
  "APIDOR",
  "TYROLIT",
  "PERFECT",
  "SMC",
  "JANATICS"
];

// Duplicate for smooth infinite scroll
const scrollBrands = [...brands, ...brands];

const BrandsSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const pause = () => track.style.animationPlayState = "paused";
    const play = () => track.style.animationPlayState = "running";

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <section className="py-14 bg-secondary overflow-hidden relative">
      
      <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-8">
        OUR PREMIUM PARTNER BRANDS
      </h2>

      {/* Mask edges for smooth fade-out sides */}
      <div className="absolute inset-y-0 left-0 w-24 bg-secondary [mask-image:linear-gradient(to_right,black,transparent)]"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-secondary [mask-image:linear-gradient(to_left,black,transparent)]"></div>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-8 animate-marquee will-change-transform"
        >
          {scrollBrands.map((name, index) => (
            <div
              key={index}
              className="min-w-[220px] px-6 py-4 rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm text-center font-extrabold text-primary text-2xl whitespace-nowrap tracking-wide"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 14s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandsSlider;
