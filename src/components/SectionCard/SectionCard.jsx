import { Link } from "react-router-dom";
import "./SectionCard.css";

export default function SectionCard({ title, img, to, reverse }) {
  return (
    <div
      className={`row g-0 section-card align-items-center ${
        reverse ? "flex-md-row-reverse" : ""
      }`}
    >
      {/* Columna de imagen */}
      <div className="col-md-6 h-100">
        <img src={img} alt={title} className="img-fluid w-100 h-100" />
      </div>

      {/* Columna de texto */}
      <div className="col-md-6 section-text">
        <div className="section-inner d-flex flex-column gap-3">
          <h2 className="mb-0">{title}</h2>
          <Link to={to} className="btn section-btn">
            Conocer más
          </Link>
        </div>
      </div>
    </div>
  );
}
