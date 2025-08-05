// src/components/SectionCard/SectionCard.jsx
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
      <div className="basis-1/2 h-full min-w-0">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Panel dorado */}
      <div className="basis-1/2 h-full min-w-0 flex">
        {/* → todo el padding y el color van aquí ← */}
        <div className="w-full bg-gold/80 flex items-center p-6 sm:p-8 lg:p-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            <p className="leading-relaxed">{text}</p>

            {to && (
              <a
                href={to}
                className="inline-block mt-4 px-6 py-2 rounded-lg
                           bg-black/90 text-white hover:bg-black transition"
              >
                Reservar
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
