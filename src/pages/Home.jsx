import Hero from "../components/Hero/Hero";
import SectionCard from "../components/SectionCard/SectionCard";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container my-5 d-flex flex-column gap-5">
        <SectionCard
          title="Nuestra cocina de raíces andinas"
          img="/images/Section1.jpg"
          to="#reservas"
        />
        <SectionCard
          title="Ingredientes locales, sabor auténtico"
          img="/images/Section2.jpg"
          to="#reservas"
          reverse
        />
      </div>

      <VideoBanner />
      <Footer />
    </>
  );
}
