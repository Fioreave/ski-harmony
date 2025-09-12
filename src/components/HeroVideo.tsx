import React, { useRef, useState } from "react";

type Source = { src: string; type: string };

interface HeroVideoProps {
  poster?: string; // /images/hero-poster.jpg
  sources?: Source[]; // [{ src:'/videos/hero.webm', type:'video/webm' }, ...]
  showControls?: boolean; // true si quieres barra de controles
  className?: string; // clases extra para el contenedor externo
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  poster = "/images/hero-poster.jpg",
  sources = [
    { src: "/videos/hero.webm", type: "video/webm" },
    { src: "/videos/hero.mp4", type: "video/mp4" },
  ],
  showControls = true,
  className = "",
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = false; // sonido ON
      v.play().catch(() => {}); // por si el navegador necesita segundo intento
    });
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-muted ring-1 ring-border ${className}`}
    >
      {/* Contenedor 16:9 (sin depender del plugin aspect-ratio) */}
      <div className="relative w-full pt-[56.25%]">
        {/* Capa inicial con póster y botón Play */}
        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            className="group absolute inset-0 w-full h-full"
            aria-label="Reproducir vídeo con sonido"
          >
            <img
              src={poster}
              alt="Vista previa del vídeo"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-white drop-shadow group-hover:scale-105 transition"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}

        {/* Vídeo real (solo se monta al pulsar) */}
        {playing && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            controls={showControls}
            preload="auto"
            onEnded={handleEnded}
          >
            {sources.map((s) => (
              <source key={s.src} src={s.src} type={s.type} />
            ))}
            {/* Subtítulos opcionales */}
            {/* <track src="/captions/es.vtt" kind="captions" srcLang="es" label="Español" /> */}
            Tu navegador no soporta el elemento de vídeo.
          </video>
        )}
      </div>
    </div>
  );
};

export default HeroVideo;
