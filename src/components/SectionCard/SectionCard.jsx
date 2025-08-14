// src/components/SectionCard/SectionCard.jsx
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "../../config/links";

export default function SectionCard({ title, text, img, reverse }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`
        relative flex flex-col md:flex-row
        ${reverse ? "md:flex-row-reverse" : ""}
        items-stretch gap-6 md:gap-10
        max-w-7xl mx-auto px-6 my-8 md:my-24
      `}
    >
      {/* FOTO */}
      <div className="basis-full md:basis-[70%]">
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-[320px] md:h-[560px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* TEXTO */}
      <div
        className={`
          basis-full md:basis-[30%] flex
          ${reverse ? "md:-mr-24" : "md:-ml-24"}
          -mt-8 md:mt-0
        `}
      >
        <div className="m-auto bg-[#F8F5EF]/95 backdrop-blur-sm border-t-4 md:border-t-0 md:border-l-4 border-gold rounded-lg shadow-xl px-6 py-8 md:px-8 md:py-10 max-w-[440px]">
          <h2 className="font-serifBrand font-bold text-3xl md:text-4xl mb-4">
            {title}
          </h2>
          <p className="font-sansBrand leading-relaxed whitespace-pre-line">
            {text}
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 rounded-lg bg-black text-white hover:bg-black/80 transition"
            aria-label="Reservar por WhatsApp"
          >
            Reservar
          </a>
        </div>
      </div>
    </motion.section>
  );
}
