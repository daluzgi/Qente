// src/components/VideoBanner/VideoBanner.jsx
import { useEffect, useRef, useState } from "react";

function VolumeIcon({ muted = false, className = "h-6 w-6" }) {
  // Íconos SVG minimalistas (muted / unmuted)
  if (muted) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M3 10v4a1 1 0 0 0 1 1h3.586L12 18.414V5.586L7.586 9H4a1 1 0 0 0-1 1Z"
          fill="currentColor"
        />
        <path
          d="M16 9l5 5m0-5l-5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M3 10v4a1 1 0 0 0 1 1h3.586L12 18.414V5.586L7.586 9H4a1 1 0 0 0-1 1Z"
        fill="currentColor"
      />
      <path
        d="M16 8a5 5 0 0 1 0 8M18.5 6.5a8 8 0 0 1 0 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function VideoBanner() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () =>
      window.matchMedia?.("(pointer: coarse)")?.matches ||
      window.innerWidth < 768;

    setIsMobile(checkMobile());

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // En desktop intentamos autoplay al montar (muted + playsInline)
  useEffect(() => {
    if (!isMobile && videoRef.current) {
      const v = videoRef.current;
      v.muted = true; // para garantizar autoplay
      v.play().catch(() => {
        // si falla el autoplay, dejamos que el usuario interactúe
      });
    } else {
      videoRef.current?.pause();
    }
  }, [isMobile]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
    // si estaba pausado y el usuario presiona el botón en desktop, intentamos reproducir
    if (v.paused && !isMobile) {
      v.play().catch(() => {});
    }
  };

  return (
    <section
      id="restaurant"
      className="
        relative isolate
        min-h-[90vh] flex items-center
        scroll-mt-24 my-10
      "
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Título + subtítulo */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-serifBrand font-bold text-3xl md:text-4xl text-neutral-900">
            Restaurant
          </h2>
          <p className="mt-2 font-sansBrand text-neutral-700">
            Descubrí la experiencia Qente
          </p>
          <hr className="mt-4 w-16 mx-auto border-gold" />
        </div>

        {/* Marco del video */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-black">
          <div className="aspect-video">
            <video
              ref={videoRef}
              src="/video/video.mp4"
              poster="/images/video-poster.webp"
              preload="none"
              className="w-full h-full object-cover"
              {...(!isMobile && {
                autoPlay: true,
                muted: isMuted,
                loop: true,
                playsInline: true,
              })}
              {...(isMobile && {
                controls: true, // mobile: el usuario reproduce con sonido
              })}
            />
          </div>

          {/* Botón de sonido: solo desktop */}
          {!isMobile && (
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
              className="
                group absolute bottom-4 right-4
                inline-flex items-center justify-center
                rounded-full p-3
                bg-white/10 backdrop-blur
                text-white
                hover:bg-white/20
                transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                shadow-lg
              "
            >
              <span className="sr-only">
                {isMuted ? "Activar sonido" : "Silenciar"}
              </span>
              <VolumeIcon
                muted={isMuted}
                className="
                  h-6 w-6
                  transition-transform duration-200
                  group-active:scale-95
                "
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
