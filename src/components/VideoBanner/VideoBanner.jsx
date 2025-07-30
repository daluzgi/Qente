export default function VideoBanner() {
  return (
    <div style={{ overflow: "hidden" }}>
      <video
        src="/video/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}
