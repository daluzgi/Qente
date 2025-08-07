// src/components/VideoBanner/VideoBanner.jsx
export default function VideoBanner() {
  return (
    <section id="restaurant" className="w-full overflow-hidden">
      <video
        src="/video/video-720.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="block w-full"
      />
    </section>
  );
}
