import { Link } from "react-router-dom";
import "./SectionCard.css";

export default function SectionCard({ title, img, to, reverse }) {
  return (
    <div
      className={`row g-0 section-card align-items-center ${
        reverse ? "flex-md-row-reverse" : ""
      }`}
    >
      <div className="col-md-6 h-100">
        <img src={img} alt={title} className="img-fluid w-100" />
      </div>
      <div className="col-md-6 d-flex flex-column gap-3 section-text">
        <h2 className="mb-0">{title}</h2>
        <Link to={to} className="btn btn-primary align-self-start">
          Conocer más
        </Link>
      </div>
    </div>
  );
}
