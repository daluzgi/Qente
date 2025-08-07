// src/components/Carousel/Carousel.jsx
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Carousel({ images }) {
  const trackRef = useRef(null);

  // desplaza el contenedor una pantalla en la dirección dir (-1 izquierda, 1 derecha)
  const scroll = (dir) => () => {
    const track = trackRef.current;
    if (!track) return;
    const width = track.offsetWidth;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <div className="relative max-w-6xl mx-auto my-12 px-4">
      {/* pista */}
      <div
        ref={trackRef}
        className="
          flex gap-4 overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center w-full md:w-1/2 lg:w-1/3"
          >
            <img
              src={src}
              alt={`Foto carrusel ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow"
            />
          </div>
        ))}
      </div>

      {/* flechas */}
      <button
        onClick={scroll(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/70 p-2 hover:bg-neutral-800 focus:outline-none"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={scroll(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/70 p-2 hover:bg-neutral-800 focus:outline-none"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
