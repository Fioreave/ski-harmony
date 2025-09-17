import React from "react";

const PartnersSection: React.FC = () => {
  const logos = [
    { src: "/clientes/cliente1.png", alt: "Cliente 1" },
    { src: "/clientes/cliente2.png", alt: "Cliente 2" },
    { src: "/clientes/cliente3.png", alt: "Cliente 3" },
    { src: "/clientes/cliente4.png", alt: "Cliente 4" },
    { src: "/clientes/cliente5.png", alt: "Cliente 5" },
    { src: "/clientes/cliente6.png", alt: "Cliente 6" },
    { src: "/clientes/cliente4.png", alt: "Cliente 7" },
  ];

  const strip = [...logos, ...logos];

  const trackStyle: React.CSSProperties = {
    animationName: "partners-marquee",
    animationDuration: "30s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    willChange: "transform",
  };

  // Tamaño uniforme (ajústalo a gusto)
  const TILE_W = 140; // ancho de la “caja” del logo
  const TILE_H = 48; // alto de la “caja” del logo

  return (
    <section className="relative w-full overflow-hidden py-10 bg-WHITE">
      <div className="relative">
        <ul className="flex items-center" style={trackStyle}>
          {strip.map((logo, i) => (
            <li
              key={i}
              className="shrink-0 mr-16 flex items-center justify-center"
              style={{ width: TILE_W, height: TILE_H }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="block max-h-full max-w-full object-contain filter grayscale opacity-90"
              />
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        section > div > ul { width: max-content; }
        @keyframes partners-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          section > div > ul { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
