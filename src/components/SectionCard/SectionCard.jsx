export default function SectionCard({ title, text, img, to, reverse }) {
  return (
    <section
      className={`
        flex flex-col md:flex-row
        ${reverse ? "md:flex-row-reverse" : ""}
        min-h-[480px] lg:min-h-[560px]
      `}
    >
      {/* Imagen */}
      <div className="basis-1/2 min-w-0">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Panel dorado: fondo aquí, no en el wrapper */}
      <div className="basis-1/2 flex items-stretch bg-gold/80 min-w-0">
        {/* Wrapper solo para padding */}
        <div className="flex flex-col justify-center w-full p-6 sm:p-8 lg:p-12">
          <h2 className="font-serifBrand font-bold text-3xl md:text-4xl mb-4">
            {title}
          </h2>
          <p className="font-sansBrand leading-relaxed">{text}</p>

          {to && (
            <a
              href={to}
              className="inline-block mt-6 px-6 py-2 rounded-lg
                         bg-black/90 text-white hover:bg-black transition"
            >
              Reservar
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
