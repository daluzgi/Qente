// src/pages/Home.jsx
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import SectionCard from "../components/SectionCard/SectionCard";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import History from "../components/History/History";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Carrusel de platos */}
      <Carousel
        images={[
          "/images/webp/Plato1.webp",
          "/images/webp/Plato2.webp",
          "/images/webp/Plato3.webp",
          "/images/webp/Plato4.webp",
          "/images/webp/Plato5.webp",
          "/images/webp/Plato6.webp",
        ]}
      />

      {/* Carrusel de ambiente */}
      <Carousel
        images={[
          "/images/webp/Carousel1.webp",
          "/images/webp/Carousel2.webp",
          "/images/webp/Carousel3.webp",
          "/images/webp/Carousel4.webp",
          "/images/webp/Carousel5.webp",
          "/images/webp/Carousel6.webp",
        ]}
      />

      {/* Tarjetas descriptivas */}
      <section className="flex flex-col gap-12 my-20">
        <SectionCard
          title="Nuestra cocina de raíces andinas"
          text={`Conoce la experiencia Qente Mikhuy.\n\nSabores de altura, fuego de campo.\n\nCarnes a las brasas, vegetales de huerta y hierbas de montaña: una fusión pensada para quienes disfrutan comer bien y sin apuro.\n\nSentate, saboreá y dejate sorprender.`}
          img="/images/webp/Section1.webp"
          to="#reservas"
        />

        <SectionCard
          title="Conectá con lo simple."
          text={`Entre amigos, familia o pareja, Qente Mikhuy es tu pausa.\n\nDisfrutá de una charla sin prisa.\n\nPorque los mejores recuerdos se cocinan lento.`}
          img="/images/webp/Section2.webp"
          to="#reservas"
          reverse
        />
      </section>

      <VideoBanner />
      <History />
      <Team />
      <div id="productos" className="my-24">
        <SectionCard
          title="Descubre nuestros productos"
          text={`Consulta mas en tu visita al restaurant.`}
          img="/images/webp/Product.webp"
          to="#reservas"
          reverse
        />
      </div>
      <Footer />
    </>
  );
}
