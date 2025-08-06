export default function Hero() {
  return (
    <header
      id="hero"
      className="
        relative isolate flex flex-col items-center justify-center
        min-h-[75vh] md:min-h-screen
        bg-[url('/images/Hero.jpg')] bg-cover bg-center
        text-white text-center
      "
    >
      {/* overlay */}
      <span className="absolute inset-0 bg-black/40 -z-10" />

      {/* título con pesos distintos */}
      <h1
        className="
          font-serifBrand text-5xl md:text-7xl leading-tight tracking-wide
        "
      >
        <span className="font-semibold">QENTE&nbsp;</span>
        <span className="font-normal">MIKHUY</span>
      </h1>

      {/* tagline */}
      <p
        className="
          mt-4 font-sansBrand font-semibold tracking-wideBrand
          uppercase text-sm md:text-base
        "
      >
        Cocina&nbsp;de&nbsp;campo
      </p>
    </header>
  );
}
