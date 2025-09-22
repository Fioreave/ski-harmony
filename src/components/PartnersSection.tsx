import React from "react";

const PartnersSection: React.FC = () => {
  const logos = [
    { src: "/clientes/cliente1.png", alt: "Cliente 1", name: "cliente1" },
    { src: "/clientes/cliente2.png", alt: "Cliente 2", name: "cliente2" },
    { src: "/clientes/cliente3.png", alt: "Cliente 3", name: "cliente3" },
    { src: "/clientes/cliente4.png", alt: "Cliente 4", name: "cliente4" },
    { src: "/clientes/cliente5.png", alt: "Cliente 5", name: "cliente5" },
    { src: "/clientes/cliente6.png", alt: "Cliente 6", name: "cliente6" },
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
    <section className="relative w-full overflow-hidden py-16 bg-muted/30">
      <div className="container mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nuestros Clientes
        </h2>
        <p className="text-lg text-muted-foreground text-center">
          Más de 35 estaciones confían en nuestras soluciones
        </p>
      </div>
      <div className="relative">
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
                className="block max-h-20 max-w-full object-contain filter grayscale opacity-80 hover:opacity-100 hover:filter-none transition-all duration-300 mb-3"
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