// src/components/History/History.jsx
export default function History() {
  return (
    <section
      id="history"
      className="
          bg-brown-dark text-white
          py-16 px-4
        "
    >
      <div className="mx-auto max-w-4xl space-y-6">
        <h2 className="font-serifBrand font-bold text-3xl md:text-4xl text-center mb-8">
          Historia
        </h2>

        <p className="font-sansBrand leading-relaxed">
          <strong>Qente Mikhuy</strong> nace como segundo proyecto encabezado
          por Leonardo Dal Maso y familia en Diego Gaynor, Provincia de Buenos
          Aires.
        </p>

        <p className="font-sansBrand leading-relaxed">
          El nombre rinde homenaje a Techi, la madre de Leonardo, gran
          admiradora de los colibríes: <em>Qente</em> significa colibrí en
          quechua y<em> Mikhuy</em> significa comida. Juntos forman{" "}
          <q>La comida del colibrí</q>, idea que resume un lugar pequeño,
          vibrante y rodeado de naturaleza, pensado para disfrutar el momento y
          la gastronomía.
        </p>

        <p className="font-sansBrand leading-relaxed">
          Antes de Qente Mikhuy, la familia abrió{" "}
          <em>Un Galpón en los Leones</em>, también en Diego Gaynor, restaurante
          que sigue funcionando con atención familiar.
        </p>

        <p className="font-sansBrand leading-relaxed">
          En Qente te recibirán con platos tradicionales y otros reversionados
          con un toque andino, donde especias y técnicas de altura realzan los
          sabores sin perder la esencia de la cocina de campo.
        </p>

        <p className="font-sansBrand leading-relaxed">
          Es una invitación a salir de la ciudad y conectar con la naturaleza en
          un ambiente de familia y amigos, donde te sentirás como en casa.
        </p>
      </div>
    </section>
  );
}
