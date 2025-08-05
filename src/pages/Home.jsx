import Hero from "../components/Hero/Hero";
import SectionCard from "../components/SectionCard/SectionCard";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team/Team";

export default function Home() {
  return (
    <>
      <Hero />

      {/* wrapper Tailwind */}
      <section className="flex flex-col gap-12 my-20">
        <SectionCard
          title="Nuestra cocina de raíces andinas"
          text="Text test. Text test. Text test. Text test. Text test. Text test. Text test. Text test. Text test."
          img="/images/Section1.jpg"
          to="#reservas"
        />

        <SectionCard
          title="Ingredientes locales, sabor auténtico"
          text="Text test. Text test. Text test. Text test. Text test. Text test. Text test. Text test. Text test."
          img="/images/Section2.jpg"
          to="#reservas"
          reverse
        />
      </section>

      <VideoBanner />
      <Team />
      <Footer />
    </>
  );
}
