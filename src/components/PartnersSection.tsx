import React from "react";

const PartnersSection: React.FC = () => {
  const logos = [
    { src: "/clientes/partner1.webp", alt: "Cliente 7", name: "Axxes" },
    { src: "/clientes/partner2.png", alt: "Cliente 8", name: "Doblemente" },
    { src: "/clientes/partner3.png", alt: "Cliente 9", name: "Webdreams" },
    { src: "/clientes/partner4.png", alt: "Cliente 10", name: "Skidata" },
    { src: "/clientes/partner5.svg", alt: "Cliente 11", name: "Redsys" },
    { src: "/clientes/partner6.svg", alt: "Cliente 12", name: "Suprema" },
    { src: "/clientes/partner7.svg", alt: "Cliente 13", name: "Ceca" },
    { src: "/clientes/partner8.svg", alt: "Cliente 14", name: "Skicase" },
    { src: "/clientes/partner9.svg", alt: "Cliente 15", name: "Shahdag" },
  ];

  const strip = [...logos, ...logos];

  const trackStyle: React.CSSProperties = {
    animationName: "partners-marquee",
    animationDuration: "40s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    willChange: "transform",
  };

  // Tamaño uniforme más grande
  const TILE_W = 200; // ancho de la "caja" del logo
  const TILE_H = 120; // alto de la "caja" del logo

  return (
    <section className="relative pb-20 w-full overflow-hidden py-16 bg-muted/30">
      <div className="container mx-auto mb-8">
        <h2 className="mb-20  pb-6 text-black text-6xl md:text-4xl font-bold text-center mb-4">
          Nuestros Partners
        </h2>
      </div>
      <div className="relative mt-6">
        <ul className="flex items-center" style={trackStyle}>
          {strip.map((logo, i) => (
            <li
              key={i}
              className="shrink-0 mr-20 flex flex-col items-center justify-center"
              style={{ width: TILE_W, height: TILE_H + 40 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="block mb-6 min-h-15 max-h-20 max-w-full object-contain filter grayscale opacity-80 hover:opacity-100 hover:filter-none transition-all duration-300 mb-3"
              />
              <span className="text-sm font-medium text-muted-foreground">
                {logo.name}
              </span>
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
