// src/components/SectionCard/SectionCard.jsx
import { motion } from "framer-motion";

export default function SectionCard({ title, text, img, to, reverse }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      /* —— contenedor centrado + margen lateral —— */
      className={`
        mx-auto max-w-6xl px-4
        flex flex-col md:flex-row
        ${reverse ? "md:flex-row-reverse" : ""}
        min-h-[480px] lg:min-h-[560px]
      `}
    >
      {/* Imagen 2/3 en desktop */}
      <div className="basis-full md:basis-2/3 min-w-0">
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Texto 1/3 en desktop */}
      <div className="basis-full md:basis-1/3 flex items-stretch bg-gold/80 md:rounded-lg">
        <div className="flex flex-col justify-center w-full p-6 sm:p-8 lg:p-12">
          <h2 className="font-serifBrand font-bold text-3xl md:text-4xl mb-4">
            {title}
          </h2>

          <p className="font-sansBrand leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.section>
  );
}
