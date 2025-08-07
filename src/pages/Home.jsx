import Hero from "../components/Hero/Hero";
import SectionCard from "../components/SectionCard/SectionCard";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team/Team";
import Carousel from "../components/Carousel/Carousel";
import History from "../components/History/History";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel
        images={[
          "/images/webp/Plato1.webp",
          "/images/webp/Plato2.webp",
          "/images/webp/Plato3.webp",
          "/images/webp/Plato4.webp",
          "/images/webp/Plato5.webp",
          "/images/webp/Plato6.webp",
          "/images/webp/Plato7.webp",
          "/images/webp/Plato8.webp",
        ]}
      />
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

      {/* wrapper Tailwind */}
      <section className="flex flex-col gap-12 my-20">
        <SectionCard
          title="Nuestra cocina de raíces andinas"
          text="Text test. Text test. Text test. Text test. Text test. Text test. Text test. Text test. Text test."
          img="/images/webp/Section1.webp"
          to="#reservas"
        />

        <SectionCard
          title="Ingredientes locales, sabor auténtico"
          text="Text test. Text test. Text test. Text test. Text test. Text test. Text test. Text test. Text test."
          img="/images/webp/Section2.webp"
          to="#reservas"
          reverse
        />
      </section>

      <VideoBanner />
      <History />
      <Team />
      <Footer />
    </>
  );
}
