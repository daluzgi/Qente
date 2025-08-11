// src/components/Carousel/Carousel.jsx
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Carousel({
  images = [],
  autoplay = true,
  delay = 4000,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
      skipSnaps: false,
    },
    autoplay ? [Autoplay({ delay, stopOnInteraction: false })] : []
  );

  const [showArrows, setShowArrows] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const perView =
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    setShowArrows(images.length > perView);
  }, [emblaApi, images.length]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const goPrev = () => emblaApi && emblaApi.scrollPrev();
  const goNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative max-w-6xl mx-auto my-12 px-4">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Track: sin gap; usamos padding por slide */}
        <div className="flex -mx-2">
          {images.map((src, i) => (
            <div
              key={i}
              className="
                px-2
                flex-[0_0_100%]
                md:flex-[0_0_50%]
                lg:flex-[0_0_33.333%]
              "
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
      </div>

      {/* Flechas */}
      {showArrows && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/70 p-2 hover:bg-neutral-800 focus:outline-none"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/70 p-2 hover:bg-neutral-800 focus:outline-none"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </>
      )}
    </div>
  );
}
