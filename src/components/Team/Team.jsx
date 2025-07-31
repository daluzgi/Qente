import "./Team.css";

export default function Team() {
  return (
    <section id="equipo" className="team-section my-5">
      <div className="team-overlay">
        <h2>El equipo</h2>
      </div>

      <div className="row g-0">
        <div className="col-6">
          <img
            src="public/images/Team1.jpg"
            alt="Team1"
            className="w-100 h-100"
          />
        </div>
        <div className="col-6">
          <img
            src="public/images/Team2.jpg"
            alt="Team2"
            className="w-100 h-100"
          />
        </div>
      </div>
    </section>
  );
}
