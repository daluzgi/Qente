// src/components/Team/Team.jsx
export default function Team() {
  return (
    <section id="equipo" className="relative my-20">
      {/* título centrado — se superpone a las fotos */}
      <h2
        className="
          absolute inset-0 z-10 flex items-center justify-center
          font-serifBrand font-bold text-white text-3xl md:text-4xl
          pointer-events-none
        "
      >
        Nuestro&nbsp;equipo
      </h2>

      {/* grid de 2 columnas en desktop, 1 en mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          src="/images/webp/Team1.webp"
          alt="Miembro del equipo"
          className="w-full h-[45vh] md:h-[65vh] object-cover"
        />
        <img
          src="/images/webp/Team2.webp"
          alt="Miembro del equipo"
          className="w-full h-[45vh] md:h-[65vh] object-cover"
        />
      </div>
    </section>
  );
}
