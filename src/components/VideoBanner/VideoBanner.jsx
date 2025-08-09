// src/components/VideoBanner/VideoBanner.jsx
export default function VideoBanner() {
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
        {/* Título + subtítulo (contraste para fondo blanco) */}
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
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-black">
          <div className="aspect-video">
            <video
              src="/video/video.mp4" /* o tu 720/1080 */
              poster="/images/video-poster.webp"
              preload="none"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
