export default function Hero() {
  return (
    <header
      id="restaurant"
      className="
        relative isolate
        flex flex-col items-center justify-center
        min-h-[75vh] md:min-h-screen
        bg-[url('/images/Hero.jpg')] bg-cover bg-center
        text-white text-center
      "
    >
      {/* overlay semi-oscuro */}
      <span className="absolute inset-0 bg-black/40 -z-10" />

      {/* título */}
      <h1 className="text-5xl md:text-7xl leading-tight font-semibold tracking-widest">
        <span className="font-extrabold">QENTE&nbsp;</span>
        <span className="font-light">MIKHUY</span>
      </h1>

      {/* sub-título */}
      <p className="mt-4 text-lg md:text-2xl tracking-wider">
        COCINA&nbsp;DE&nbsp;CAMPO
      </p>
    </header>
  );
}
