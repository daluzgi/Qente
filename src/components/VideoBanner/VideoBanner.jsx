export default function VideoBanner() {
  return (
    <section
      id="restaurant"
      className="
        relative isolate
        min-h-[90vh]          /* mismo alto mínimo en todas las vistas */
        flex items-center
        bg-brown-dark/30
        scroll-mt-24
        my-10
      "
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
          {/* mismo aspect ratio en todas las vistas */}
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
