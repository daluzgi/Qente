import Hero from "../components/Hero/Hero";
import SectionCard from "../components/SectionCard/SectionCard";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team/Team";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="bg-red-400 text-white p-4 rounded">
        Tailwind v4 andando 🚀
      </div>

      <div className="my-5 d-flex flex-column gap-4">
        <SectionCard
          title="Nuestra cocina de raíces andinas"
          text="Text test. Text test. Text test. Text test. Text test.Text test. Text test. Text test. Text test."
          img="/images/Section1.jpg"
          to="#reservas"
        />
        <SectionCard
          title="Ingredientes locales, sabor auténtico"
          text="Text test. Text test. Text test. Text test. Text test.Text test. Text test. Text test. Text test."
          img="/images/Section2.jpg"
          to="#reservas"
          reverse
        />
      </div>

      <VideoBanner />
      <Team />
      <Footer />
    </>
  );
}
